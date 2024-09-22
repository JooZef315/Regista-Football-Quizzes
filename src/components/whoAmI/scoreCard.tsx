"use client";

import { useWhoStore } from "@/store/whoStore";
import { useUsersStore } from "@/store/usersStore";

export default function ScoreCard({ team }: { team: 1 | 2 | 3 }) {
  const singleName = useUsersStore((state) => state.singleName);
  const team1Name = useUsersStore((state) => state.team1Name);
  const team2Name = useUsersStore((state) => state.team2Name);
  const score = useWhoStore((state) => state.score);
  const score1 = useWhoStore((state) => state.score1);
  const score2 = useWhoStore((state) => state.score2);
  const strike = useWhoStore((state) => state.strike);
  const strike1 = useWhoStore((state) => state.strike1);
  const strike2 = useWhoStore((state) => state.strike2);

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div
        dir="auto"
        className={`flex items-center text-white rounded-md ${
          team == 2 ? "bg-yellow-500" : "bg-blue-400"
        }`}
      >
        <h2 className="p-3 font-semibold text-xl border-r-2 border-white">
          {team === 1 ? team1Name : team === 2 ? team2Name : singleName} Score:{" "}
          <span className="font-bold text-2xl">
            {team === 1 ? score1 : team === 2 ? score2 : score}
          </span>
        </h2>
      </div>
      <div
        dir="auto"
        className={`flex items-center text-white rounded-md ${
          team == 2 ? "bg-yellow-700" : "bg-blue-700"
        }`}
      >
        <h2 className="p-3 font-semibold text-xl border-r-2 border-white">
          {team === 1 ? team1Name : team === 2 ? team2Name : singleName}{" "}
          Strikes:{" "}
          <span className="font-bold text-2xl">
            {team === 1 ? strike1 : team === 2 ? strike2 : strike}
          </span>
        </h2>
      </div>
    </div>
  );
}
