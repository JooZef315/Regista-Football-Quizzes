"use client";

import { useUsersStore } from "@/store/usersStore";
import { useState, useEffect } from "react";

export default function Timer({ initialSeconds }: { initialSeconds: number }) {
  const [seconds, setSeconds] = useState(initialSeconds);

  const setTimeUp = useUsersStore((state) => state.setTimeUp);

  useEffect(() => {
    if (seconds > 0) {
      const interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);

      // Cleanup interval on component unmount
      return () => clearInterval(interval);
    } else {
      setTimeUp();
      console.log("finish!!");
    }
  }, [seconds, setTimeUp]);

  return (
    <div
      className={`p-4 text-3xl text-center text-white shadow-lg rounded-lg ${
        seconds > 5 ? "bg-amber-500" : "bg-red-500"
      } `}
    >
      <p>
        Time: <span className="font-extrabold">{seconds}</span>
      </p>
    </div>
  );
}
