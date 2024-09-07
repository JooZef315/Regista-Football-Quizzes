"use client";

import { usePasswordStore } from "@/store/passwordStore";
import { useState } from "react";

export default function CluesForm() {
  const [clueInput, setClueInput] = useState("");
  const turn = usePasswordStore((state) => state.turn);
  const toggleTurn = usePasswordStore((state) => state.toggleTurn);
  const addClue = usePasswordStore((state) => state.addClue);

  const handleAddClue = () => {
    addClue({ clue: clueInput, team: turn });
    toggleTurn();
  };

  return (
    <div dir="rtl" className="flex flex-wrap items-center justify-center">
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
  );
}
