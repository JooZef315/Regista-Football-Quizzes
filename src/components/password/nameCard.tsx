/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useGetPasswords } from "@/hooks/useGetPasswords";
import { usePasswordStore } from "@/store/passwordStore";
import { useEffect } from "react";
import { PiPasswordDuotone } from "react-icons/pi";

export default function NameCard() {
  const player = usePasswordStore((state) => state.passwordsName);
  const passwordCategory = usePasswordStore((state) => state.passwordCategory);
  const score1 = usePasswordStore((state) => state.score1);
  const score2 = usePasswordStore((state) => state.score2);
  const showName = usePasswordStore((state) => state.showName);

  const getPasswords = useGetPasswords();
  useEffect(() => {
    const getNames = async () => {
      await getPasswords(passwordCategory);
    };
    getNames();
  }, [score1, score2]);

  return (
    <div
      dir="auto"
      className={`flex justify-center items-center m-3 bg-amber-500 p-7 font-semibold text-center text-5xl text-white ring-1 ring-sky-950 shadow-xl rounded-sm transition-transform duration-700 ease-in-out ${
        showName ? "scale-100" : "scale-95"
      }`}
    >
      {showName ? player : <PiPasswordDuotone size={148} />}
    </div>
  );
}
