"use client";

import useTabloidContext from "@/lib/hooks";
import { useEffect, useState } from "react";

type TimerProps = {
  isActive: boolean;
  timeLimit: number | undefined;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Timer({ isActive, timeLimit }: TimerProps) {
  const [seconds, setSeconds] = useState(timeLimit ? timeLimit : 0);

  const { setTotalSecs, setIsExpired } = useTabloidContext();

  const [mins, setMins] = useState(0);

  // to stop the timer
  useEffect(() => {
    if (timeLimit && seconds === 0) {
      setIsExpired(true);
    }
  }, [seconds, setIsExpired, timeLimit]);

  // to set the Stopwatch properly
  useEffect(() => {
    if (seconds > 59) {
      setSeconds(0);
      setMins((prev) => prev + 1);
    }
  }, [seconds]);

  let interval: NodeJS.Timeout | undefined = undefined;
  useEffect(() => {
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) =>
          timeLimit ? prevSeconds - 1 : prevSeconds + 1
        );

        setTotalSecs((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <p className="text-lg">
      {mins.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}
    </p>
  );
}
