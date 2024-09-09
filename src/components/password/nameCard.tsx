/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useGetPasswords } from "@/hooks/useGetPasswords";
import { usePasswordStore } from "@/store/passwordStore";
import { useEffect, useState } from "react";

export default function NameCard() {
  const list = usePasswordStore((state) => state.passwordsList);
  const counter = usePasswordStore((state) => state.counter);
  const passwordCategory = usePasswordStore((state) => state.passwordCategory);

  const [player, setPlayer] = useState(list[counter]);

  const getPasswords = useGetPasswords();

  useEffect(() => {
    console.log(list);
    if (list.length == 0) {
      const getNames = async () => {
        await getPasswords(passwordCategory);
      };
      getNames();
    }
    setPlayer(list[0]);
  }, [list]);

  useEffect(() => {
    setPlayer(list[counter]);
  }, [counter]);

  return (
    <div
      dir="auto"
      className="m-3 bg-amber-500 p-7 font-semibold text-center text-5xl text-white ring-1 ring-sky-950 shadow-xl rounded-sm"
    >
      {player && player.playerName}
    </div>
  );
}
