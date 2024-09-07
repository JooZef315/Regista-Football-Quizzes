"use client";

import { useUsersStore } from "@/store/usersStore";
import { useEffect, useState } from "react";

export default function PasswordScore({
  team,
  score,
}: {
  team: 1 | 2;
  score: number;
}) {
  const [team1Name, setTeam1Name] = useState("");
  const [team2Name, setTeam2Name] = useState("");

  const storeTeam1Name = useUsersStore((state) => state.team1Name);
  const storeTeam2Name = useUsersStore((state) => state.team2Name);

  // Only set the team names after hydration
  useEffect(() => {
    setTeam1Name(storeTeam1Name);
    setTeam2Name(storeTeam2Name);
  }, [storeTeam1Name, storeTeam2Name]);

  return (
    <div
      dir="auto"
      className={`flex items-center text-white rounded-md ${
        team == 1 ? "bg-blue-500" : "bg-yellow-400"
      }`}
    >
      <h2 className="p-3 font-semibold text-xl border-r-2 border-white">
        {team === 1 ? team1Name : team2Name} Score:{" "}
        <span className="font-bold text-2xl">{score}</span>
      </h2>
      <button type="button" className={`p-3 cursor-pointer text-2xl font-bold`}>
        +
      </button>
    </div>
  );
}
