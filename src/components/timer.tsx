"use client";

import { useUsersStore } from "@/store/usersStore";
import { useState, useEffect } from "react";

type PropsType = {
  initialSeconds: number;
};
export default function Timer({ initialSeconds }: PropsType) {
  const [seconds, setSeconds] = useState(initialSeconds);

  const timeIsUp = useUsersStore((state) => state.timeIsUp);
  const timeIsRunning = useUsersStore((state) => state.timeIsRunning);
  const setTimeUp = useUsersStore((state) => state.setTimeUp);

  useEffect(() => {
    if (timeIsRunning) {
      if (seconds >= 0) {
        const interval = setInterval(() => {
          setSeconds((prev) => prev - 1);
        }, 1000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
      } else {
        setTimeUp(true);
      }
    }
  }, [seconds, setTimeUp, timeIsRunning]);

  useEffect(() => {
    if (timeIsUp) {
      setTimeUp(false);
      setSeconds(initialSeconds);
    }
  }, [timeIsUp, setTimeUp, initialSeconds]);

  return (
    <div
      className={`sticky z-20  top-[75px] p-4 text-3xl text-center text-white shadow-lg rounded-lg ${
        seconds > 5 ? "bg-amber-500" : "bg-red-500"
      } `}
    >
      <p>
        Time: <span className="font-extrabold">{seconds}</span>
      </p>
    </div>
  );
}
