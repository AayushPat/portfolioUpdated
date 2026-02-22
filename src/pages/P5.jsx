import { useEffect, useRef } from "react";
import NavBar from "../components/NavBar";
import LazyImage from "../components/LazyImage";

const GAME_URL = "https://gameforblind.onrender.com/gfb.html";

export default function P5() {
  const iframeRef = useRef(null);

  useEffect(() => {
    // Pre-warm the Render.com free-tier server so it's ready before the user clicks Start.
    // Render sleeps after inactivity; the first /api/tts call fails if the server isn't up yet,
    // causing the game to fall back to the browser's default voice.
    fetch("https://gameforblind.onrender.com/", { mode: "no-cors" }).catch(() => {});

    // Capture the element now — ref may be null by the time cleanup runs
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.src = GAME_URL;
    }
    // Kill the iframe when navigating away — stops all audio and game loops
    return () => {
      if (iframe) {
        iframe.src = "about:blank";
      }
    };
  }, []);

  return (
    <main id="main-content" className="bg-black w-full min-h-screen">
      <NavBar textColor="text-blue-200" />

      {/* Header */}
      <div className="px-6 lg:px-16 pt-10 pb-8">
        <h1 className="text-white text-4xl lg:text-8xl font-[poppins] mb-8">
          EchoPath
        </h1>
        <p className="text-white font-[poppins] text-base lg:text-lg leading-relaxed max-w-3xl">
          An audio-first exploration game built around accessibility, allowing players to navigate, discover checkpoints, and avoid danger using sound instead of visuals.
          EchoPath was designed from the ground up for blind and visually impaired players — rather than retrofitting accessibility onto an existing visual experience,
          every mechanic is driven by spatial audio. Players explore an open map to locate 10 hidden checkpoints using stereo panning and volume cues, where getting louder
          means getting closer. Narrated feedback guides progress, while certain audio signals warn of danger zones to avoid. Building this project deepened my understanding
          of the Web Audio API, inclusive design principles, and how thoughtful sound engineering can replace an entire visual layer.
        </p>
      </div>

      {/* GitHub Button */}
      <div className="flex justify-center pb-12">
        <a
          href="https://github.com/AayushPat/gameforblind"
          target="_blank"
          rel="noopener noreferrer"
          className="lg:text-4xl px-6 py-3 text-black bg-white rounded-lg hover:bg-gray-800 hover:text-white transition duration-300"
          aria-label="View EchoPath on GitHub (opens in new tab)"
        >
          View on GitHub
        </a>
      </div>

      {/* Playable Embed */}
      <div className="px-6 lg:px-16 pb-20 flex flex-col items-center">
        <h2 className="text-white text-2xl lg:text-4xl font-[poppins] mb-2 self-start">
          Play It
        </h2>
        <p className="text-white/50 font-[poppins] text-sm mb-6 self-start">
          (AI narrator currently unavailable — ElevenLabs free tier ran out. Browser voice is used instead. Ik it sounds horrible and robotic sorry, working on getting it back up ASAP)
        </p>
        <div className="w-full max-w-5xl rounded-xl overflow-hidden border-2 border-white shadow-2xl">
          <iframe
            ref={iframeRef}
            title="EchoPath — blind-accessible audio game"
            allow="autoplay; microphone"
            className="w-full"
            style={{ height: '600px', border: 'none' }}
          />
        </div>
        <p className="text-white/50 font-[poppins] text-sm mt-4">
          Use W/A/S/D or arrow keys to move. Audio required — headphones recommended. 
        </p>
      </div>

      {/* Screenshot fallback */}
      <div className="px-6 lg:px-16 pb-20 flex justify-center">
        <div className="text-center w-full max-w-4xl">
          <h2 className="text-white text-2xl lg:text-4xl font-[poppins] mb-4">Gameplay</h2>
          <LazyImage
            src="/gameforB.png"
            alt="EchoPath gameplay screenshot showing the audio-based exploration map"
            className="w-full rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </main>
  );
}
