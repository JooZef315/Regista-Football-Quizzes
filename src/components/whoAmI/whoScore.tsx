"use client";

import { useUsersStore } from "@/store/usersStore";
import ScoreCard from "./scoreCard";
import WinnerModal from "../winnerModal";
import { useWhoStore } from "@/store/whoStore";

export default function WhoScore() {
  const isSingle = useUsersStore((state) => state.isSingle);
  const winner = useWhoStore((state) => state.winner);
  return (
    <div className="w-full p-4 text-center flex flex-wrap gap-2 items-center justify-around">
      {isSingle ? (
        <ScoreCard team={3} />
      ) : (
        <>
          <ScoreCard team={1} />
          <ScoreCard team={2} />
        </>
      )}
      {winner !== "draw" && <WinnerModal currentPath={"/whoAmI"} />}
    </div>
  );
}
