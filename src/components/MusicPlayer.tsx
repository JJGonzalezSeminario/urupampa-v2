"use client";
import { useState, useRef } from 'react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      if (audioRef.current) audioRef.current.volume = 0.4;
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} loop preload="metadata">
        <source src="/Así Fue - Urupampa.mp3" type="audio/mpeg" />
      </audio>

      <button 
        onClick={togglePlay} 
        className="music-floating-btn"
        aria-label={isPlaying ? "Pausar música" : "Reproducir música de Uru Pampa"}
      >
        <span className="music-icon">
          {isPlaying ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          )}
        </span>
        <span className="music-text">{isPlaying ? 'Playing...' : 'Play Music'}</span>
      </button>
    </>
  );
}