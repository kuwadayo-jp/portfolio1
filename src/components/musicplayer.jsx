import React, { useRef, useState, useEffect } from "react";

const Musicplayer = () => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    const audio = audioRef.current;
    const updateTime = () => setCurrentTime(audio.currentTime);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", () => setDuration(audio.duration));

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
    };
  }, []);

  const formatTime = (time) => {
    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60);
    return `${m}:${s.toString().padStart(2, "0")}`;
  };
  const handleSeek = (e) => {
    const newTime = e.target.value;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };
  const handleVolume = (e) => {
    const vol = e.targert.value;
    audioRef.current.volume = vol;
    setVolume(vol);
  };
  return (
    <div className="glass w-[90%] p-6 rounded-xl text-white shadow-xl">
      <div className="text-xl font-semibold mb-4 text-center">サンプル曲1</div>
      <audio ref={audioRef} src="../../public/test16.wav" />

      <div className="flex justify-center gap-4 mb-4">
        <button
          onClick={() => audioRef.current.play()}
          className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full"
        >
          ▶
        </button>
        <button
          onClick={() => audioRef.current.pause()}
          className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full"
        >
          ⏸
        </button>
        <button
          onClick={() => {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
          }}
          className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full"
        >
          ⏹
        </button>
        <button
          onClick={() => {
            setIsMuted(!isMuted);
            audioRef.current.muted = !isMuted;
          }}
          className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-full"
        >
          🔇
        </button>
      </div>

      <div className="mb-4">
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleSeek}
          className="w-full bg-white/30 h-2 rounded-lg"
        />
        <div className="flex justify-between text-xs mt-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
      <div>
        <label className="block text-sm mb-1">音量</label>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolume}
          className="w-full bg-white/30 h-2 rounded-lg"
        />
      </div>
    </div>
  );
};

export default Musicplayer;
