export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

  const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REFRESH_TOKEN } = process.env;
  const DAYLIST_ID = '37i9dQZF1FbCZVYWLrZZeo';

  // Exchange refresh token for access token
  const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: SPOTIFY_REFRESH_TOKEN,
      client_id: SPOTIFY_CLIENT_ID,
      client_secret: SPOTIFY_CLIENT_SECRET,
    }),
  });

  if (!tokenRes.ok) {
    return res.status(500).json({ error: 'Failed to refresh token' });
  }

  const { access_token } = await tokenRes.json();

  // Fetch playlist data
  const playlistRes = await fetch(
    `https://api.spotify.com/v1/playlists/${DAYLIST_ID}?fields=name,description,external_urls,images,tracks.items(track(name,artists(name),album(images),external_urls,duration_ms))`,
    { headers: { Authorization: `Bearer ${access_token}` } }
  );

  if (!playlistRes.ok) {
    return res.status(500).json({ error: 'Failed to fetch playlist' });
  }

  const data = await playlistRes.json();
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');
  res.status(200).json(data);
}
