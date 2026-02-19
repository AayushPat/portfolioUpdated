import { useEffect, useState } from "react";

export default function DaylistEmbed() {
  const [playlist, setPlaylist] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/daylist");
        if (!res.ok) throw new Error();
        setPlaylist(await res.json());
      } catch {
        setError(true);
      }
    }
    load();

    // Refresh when tab regains focus
    window.addEventListener("visibilitychange", () => {
      if (!document.hidden) load();
    });
  }, []);

  if (error) return null;

  if (!playlist) {
    return (
      <div className="w-27 h-40 sm:w-[20vw] sm:h-[50vh] lg:w-[22vw] lg:h-[45vh] rounded-lg bg-[#121212] animate-pulse" />
    );
  }

  const cover = playlist.images?.[0]?.url;
  const tracks = playlist.tracks?.items?.slice(0, 5) ?? [];

  return (
    <div className="w-27 sm:w-[20vw] lg:w-[22vw] rounded-lg overflow-hidden bg-[#121212] text-white font-sans flex flex-col">
      {/* Cover + title */}
      <a href={playlist.external_urls?.spotify} target="_blank" rel="noreferrer" className="block">
        {cover && (
          <img src={cover} alt="Daylist cover" className="w-full aspect-square object-cover" />
        )}
        <div className="px-3 pt-2 pb-1">
          <p className="text-[10px] uppercase tracking-widest text-[#1DB954] font-bold">Daylist</p>
          <p className="text-xs font-bold leading-tight truncate">{playlist.name}</p>
          {playlist.description && (
            <p
              className="text-[10px] text-gray-400 mt-0.5 leading-tight line-clamp-2"
              dangerouslySetInnerHTML={{ __html: playlist.description }}
            />
          )}
        </div>
      </a>

      {/* Track list */}
      <ul className="px-3 pb-3 space-y-1.5 mt-1">
        {tracks.map(({ track }, i) => {
          if (!track) return null;
          const albumArt = track.album?.images?.at(-1)?.url;
          const artists = track.artists?.map((a) => a.name).join(", ");
          return (
            <li key={i}>
              <a
                href={track.external_urls?.spotify}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                {albumArt && (
                  <img src={albumArt} alt="" className="w-7 h-7 rounded shrink-0" />
                )}
                <div className="min-w-0">
                  <p className="text-[11px] font-medium truncate">{track.name}</p>
                  <p className="text-[10px] text-gray-400 truncate">{artists}</p>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
