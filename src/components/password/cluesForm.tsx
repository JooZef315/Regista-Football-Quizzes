"use client";

import { usePasswordStore } from "@/store/passwordStore";
import { useUsersStore } from "@/store/usersStore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function CluesForm() {
  const [clueInput, setClueInput] = useState("");
  const turn = usePasswordStore((state) => state.turn);
  const addClue = usePasswordStore((state) => state.addClue);

  const storeTeam1 = useUsersStore((state) => state.team1Name);
  const storeTeam2 = useUsersStore((state) => state.team2Name);

  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");

  // Only set the team names after hydration
  useEffect(() => {
    setTeam1(storeTeam1);
    setTeam2(storeTeam2);
  }, [storeTeam1, storeTeam2]);

  const handleAddClue = () => {
    if (clueInput) {
      addClue({ clue: clueInput, team: turn });
      setClueInput("");
    } else {
      toast.error("اكتب clue لو سمحت");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h2
        dir="rtl"
        className={`p-4 text-sky-900 shadow-sm text-center ${
          turn == "team1" ? "bg-blue-200" : "bg-yellow-200"
        }`}
      >
        دلوقتي دور فريق {turn == "team1" ? team1 : team2}
      </h2>
      <div
        dir="rtl"
        className="flex flex-wrap items-center justify-center gap-2 sm:gap-0"
      >
        <input
          dir="rtl"
          className="py-3 px-5 text-amber-500 ring-1 ring-amber-500 focus:ring-amber-500 focus:outline-none placeholder:text-amber-500 placeholder:opacity-50 shadow-sm"
          type="text"
          name="team1"
          id="team1"
          value={clueInput}
          onChange={(e) => setClueInput(e.target.value.trim().toLowerCase())}
          placeholder="تقدر تزود ال clue هنا"
        />
        <button
          type="button"
          onClick={handleAddClue}
          className="text-center bg-white text-amber-500 ring-1 ring-amber-500 hover:bg-amber-500 hover:text-white py-3 px-5 shadow-sm font-bold"
        >
          Add
        </button>
      </div>
    </div>
  );
}
