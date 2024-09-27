/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { usePasswordStore } from "@/store/passwordStore";
import { useUsersStore } from "@/store/usersStore";
import { useWhoStore } from "@/store/whoStore";
import { useState, useEffect } from "react";

type PropsType = {
  initialSeconds: number;
};
export default function Timer({ initialSeconds }: PropsType) {
  const [seconds, setSeconds] = useState(initialSeconds);

  const isSingle = useUsersStore((state) => state.isSingle);
  const timeIsUp = useUsersStore((state) => state.timeIsUp);
  const timeIsRunning = useUsersStore((state) => state.timeIsRunning);
  const setTimeUp = useUsersStore((state) => state.setTimeUp);
  const setTimerunning = useUsersStore((state) => state.setTimerunning);

  const tooglePasswordTurns = usePasswordStore((state) => state.toggleTurn);

  const counter = useWhoStore((state) => state.counter);
  const startStriking = useWhoStore((state) => state.startStriking);
  const suspended = useWhoStore((state) => state.suspended);
  const setSuspended = useWhoStore((state) => state.setSuspended);
  const addStrike = useWhoStore((state) => state.addStrike);

  let path = "";
  if (typeof window !== "undefined") {
    path = window.location.pathname;
  }

  const toggleWhoStrikesTurn = () => {
    if (!isSingle) {
      const turn = suspended == "team1" ? "team2" : "team1";
      addStrike(turn);
      setSuspended(turn);
      setTimerunning(true);
      setTimeUp(false);
    }
  };
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
        tooglePasswordTurns();
        if (path == "/whoAmI" && counter < 5) {
          setTimerunning(false);
        }
      }
    }
  }, [seconds, setTimeUp, timeIsRunning]);

  useEffect(() => {
    if (timeIsUp) {
      setTimeUp(false);
      if (path == "/whoAmI" && startStriking) {
        setSeconds(30);
        if (seconds == -1) {
          toggleWhoStrikesTurn();
        }
      } else {
        setSeconds(initialSeconds);
      }
    }
  }, [timeIsUp, initialSeconds]);

  useEffect(() => {
    if (counter == 0) {
      console.log("here");
      setSeconds(0);
      setTimerunning(false);
    }
  }, [counter]);

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
