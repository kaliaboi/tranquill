"use client";
import Player from "@/components/player";
import { useRef } from "react";

export default function Home() {
  const ref1 = useRef<HTMLAudioElement>(null);
  const ref2 = useRef<HTMLAudioElement>(null);
  const handleClick = () => {
    ref1.current?.play();
    ref2.current?.play();
  };
  const handleVolume = () => {
    if (ref2.current) {
      ref2.current.volume = 0.2;
    }
  };
  return (
    <main className=" flex gap-6">
      <button onClick={handleClick}>play</button>
      <button onClick={handleVolume}>dim music</button>
      <audio ref={ref1} src="/1.mp3" controls></audio>
      <audio ref={ref2} src="/2.mp3" controls></audio>
    </main>
  );
}
