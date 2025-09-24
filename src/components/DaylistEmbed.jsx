import { useEffect, useState } from "react";

const DAYLIST_ID = "37i9dQZF1FbGH0nYRrFkQt"; // paste your Daylist ID here

export default function DaylistEmbed() {
  const [nonce, setNonce] = useState(Date.now()); // cache-buster

  // Refresh on tab refocus or every 30 minutes
  useEffect(() => {
    const onFocus = () => setNonce(Date.now());
    window.addEventListener("visibilitychange", () => {
      if (!document.hidden) onFocus();
    });
    const iv = setInterval(onFocus, 30 * 60 * 1000);
    return () => clearInterval(iv);
  }, []);

  return (
    <iframe
      key={nonce} 
      className=" className=w-27 h-40 sm:w-[20vw] sm:h-[50vh] lg:w-[22vw] lg:h-[45vh] rounded-lg"
      src={`https://open.spotify.com/embed/playlist/${DAYLIST_ID}?utm_source=generator&theme=0&_=${nonce}`}
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  );
}
