/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useUsersStore } from "@/store/usersStore";
import { useWhoStore } from "@/store/whoStore";
import { useEffect, useState } from "react";
import { MdOutlineTimer } from "react-icons/md";

export default function WhoUtil() {
  const counter = useWhoStore((state) => state.counter);
  const suspended = useWhoStore((state) => state.suspended);
  const showNextQ = useWhoStore((state) => state.showNextQ);
  const setSuspended = useWhoStore((state) => state.setSuspended);

  const timeIsUp = useUsersStore((state) => state.timeIsUp);
  const isSingle = useUsersStore((state) => state.isSingle);
  const storeSingle = useUsersStore((state) => state.singleName);
  const storeTeam1 = useUsersStore((state) => state.team1Name);
  const storeTeam2 = useUsersStore((state) => state.team2Name);
  const setTimerunning = useUsersStore((state) => state.setTimerunning);

  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [single, setSingleName] = useState("");

  useEffect(() => {
    setTeam1(storeTeam1);
    setTeam2(storeTeam2);
    setSingleName(storeSingle);
  }, [storeTeam1, storeTeam2, storeSingle]);

  const handleStartTime = () => {
    showNextQ();
    setTimerunning(true);
    setSuspended("");
  };
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div>
        <button
          type="button"
          dir="rtl"
          className="flex items-center justify-center gap-1 text-center text-white bg-cyan-600 hover:bg-cyan-700 font-semibold py-2 px-5 rounded-2xl shadow-md disabled:opacity-30"
          onClick={handleStartTime}
          disabled={counter > 4}
        >
          <MdOutlineTimer size={32} />
          {counter == 0 ? "ابدأ لعب" : "أظهر الclue الجديد"}
        </button>
      </div>
      <h2
        dir="rtl"
        className="p-4 shadow-sm text-center text-white bg-cyan-600"
      >
        {isSingle && suspended != "single"
          ? `${single} من حقك تجاوب`
          : isSingle && suspended == "single"
          ? "اظهر الclue الجديد عشان تقدر تجاوب"
          : suspended == "team1"
          ? `${team2} بس اللي من حقه يجاوب`
          : suspended == "team2"
          ? `${team1} بس اللي من حقه يجاوب`
          : "اي فريق يقدر يجاوب على الclue ده"}
      </h2>
    </div>
  );
}
