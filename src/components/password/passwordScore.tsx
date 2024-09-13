/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { usePasswordStore } from "@/store/passwordStore";
import { useUsersStore } from "@/store/usersStore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import WinnerModal from "../winnerModal";

export default function PasswordScore({ team }: { team: 1 | 2 }) {
  const [team1Name, setTeam1Name] = useState("");
  const [team2Name, setTeam2Name] = useState("");

  const storeTeam1Name = useUsersStore((state) => state.team1Name);
  const storeTeam2Name = useUsersStore((state) => state.team2Name);
  const setTimerunning = useUsersStore((state) => state.setTimerunning);

  const winner = usePasswordStore((state) => state.winner);
  const deserveDouble = usePasswordStore((state) => state.deserveDouble);
  const turn = usePasswordStore((state) => state.turn);
  const score1 = usePasswordStore((state) => state.score1);
  const score2 = usePasswordStore((state) => state.score2);
  const showName = usePasswordStore((state) => state.showName);
  const addToScore1 = usePasswordStore((state) => state.addToScore1);
  const addToScore2 = usePasswordStore((state) => state.addToScore2);
  const setShowName = usePasswordStore((state) => state.setShowName);
  const setDeserveDouble = usePasswordStore((state) => state.setDeserveDouble);

  // Only set the team names after hydration
  useEffect(() => {
    setTeam1Name(storeTeam1Name);
    setTeam2Name(storeTeam2Name);
  }, [storeTeam1Name, storeTeam2Name]);

  const handleAddScore = async () => {
    if (team == 1 && turn == "team1") {
      if (deserveDouble) {
        toast.success(`DOUBLE!! for team ${team1Name} 🎉🎉`);
      }
      addToScore1();
      setShowName(false);
      setTimerunning(false);
    } else if (team == 2 && turn == "team2") {
      if (deserveDouble) {
        toast.success(`DOUBLE!! for team ${team2Name} 🎉🎉`);
      }
      addToScore2();
      setShowName(false);
      setTimerunning(false);
    } else {
      toast.error("دلوقتي دور الفريق المنافس!");
    }
    setDeserveDouble(true);
  };

  return (
    <>
      <div
        dir="auto"
        className={`flex items-center text-white rounded-md ${
          team == 1 ? "bg-blue-500" : "bg-yellow-400"
        }`}
      >
        <h2 className="p-3 font-semibold text-xl border-r-2 border-white">
          {team === 1 ? team1Name : team2Name} Score:{" "}
          <span className="font-bold text-2xl">
            {team === 1 ? score1 : score2}
          </span>
        </h2>
        <button
          type="button"
          className={`p-3 cursor-pointer text-2xl font-bold disabled:opacity-30`}
          onClick={handleAddScore}
          disabled={!showName}
        >
          +
        </button>
      </div>
      {winner !== "draw" && <WinnerModal currentPath={"/password"} />}
    </>
  );
}
