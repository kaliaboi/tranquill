"use client";
import { FC, ReactNode, useEffect, useRef, useState } from "react";

import useSound from "use-sound";

interface PlayerProps {
  src: string;
}

const Player: FC<PlayerProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  useEffect(() => {
    audioRef.current?.play();
  }, []);
  //   const [play, { pause }] = useSound(src, { volume: 0.5 });
  //   const [playing, setPlaying] = useState(false);
  //   const handleClick = () => {
  //     if (playing) {
  //       pause();
  //       setPlaying(false);
  //     } else {
  //       play();
  //       setPlaying(true);
  //     }
  //   };
  //   return <button onClick={handleClick}>PLAY</button>;
  return <audio ref={audioRef} src={src} controls></audio>;
};

export default Player;
