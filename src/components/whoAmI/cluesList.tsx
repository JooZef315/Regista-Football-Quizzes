/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useGetWho } from "@/hooks/useGetWho";
import { useUsersStore } from "@/store/usersStore";
import { useWhoStore } from "@/store/whoStore";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function CluesList() {
  const isSingle = useUsersStore((state) => state.isSingle);
  const clues = useWhoStore((state) => state.clues);
  const score = useWhoStore((state) => state.score);
  const score1 = useWhoStore((state) => state.score1);
  const score2 = useWhoStore((state) => state.score2);
  const strike = useWhoStore((state) => state.strike);
  const strike1 = useWhoStore((state) => state.strike1);
  const strike2 = useWhoStore((state) => state.strike2);
  const setTimerunning = useUsersStore((state) => state.setTimerunning);

  const getWho = useGetWho();
  useEffect(() => {
    setTimerunning(false);
    const getClues = async () => {
      await getWho();
    };
    getClues();
  }, [score, score1, score2]);

  useEffect(() => {
    const getClues = async () => {
      await getWho();
    };
    if (strike == 3 && isSingle) {
      toast.error("محاولاتك خلصت، هتبدأ مع لاعب جديد");
      getClues();
    }
    if (strike1 == 3 && strike2 == 3) {
      toast.error("الدور ده خلص تعادل، هنبدأ مع لاعب جديد");
      getClues();
    }
  }, [strike, strike1, strike2]);

  return (
    <ul>
      {clues.map((clue, idx) => {
        return (
          <li
            key={idx}
            dir="rtl"
            className={`flex justify-center items-center m-3 bg-amber-500 p-7 font-semibold text-center text-xl text-white ring-1 ring-sky-950 shadow-xl rounded-sm transition-transform duration-700 ease-in-out ${
              clue.show ? "scale-100" : "scale-95"
            } ${clue.show ? "" : "hidden"}`}
          >
            {clue.clue}
          </li>
        );
      })}
    </ul>
  );
}
