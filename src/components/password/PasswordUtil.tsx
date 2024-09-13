"use client";

import { useGetPasswords } from "@/hooks/useGetPasswords";
import { usePasswordStore } from "@/store/passwordStore";
import { useUsersStore } from "@/store/usersStore";
import { useEffect, useState } from "react";
import { BsSkipForwardBtn } from "react-icons/bs";
import { FaExchangeAlt } from "react-icons/fa";
import { MdOutlineTimer } from "react-icons/md";

export default function PasswordUtil() {
  const storeTeam1 = useUsersStore((state) => state.team1Name);
  const storeTeam2 = useUsersStore((state) => state.team2Name);
  const timeIsRunning = useUsersStore((state) => state.timeIsRunning);
  const setTimeUp = useUsersStore((state) => state.setTimeUp);
  const setTimerunning = useUsersStore((state) => state.setTimerunning);

  const turn = usePasswordStore((state) => state.turn);
  const deserveDouble = usePasswordStore((state) => state.deserveDouble);
  const passwordCategory = usePasswordStore((state) => state.passwordCategory);
  const showName = usePasswordStore((state) => state.showName);
  const toggleTurn = usePasswordStore((state) => state.toggleTurn);
  const setShowName = usePasswordStore((state) => state.setShowName);
  const setDeserveDouble = usePasswordStore((state) => state.setDeserveDouble);

  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [loading, setLoading] = useState(false);

  const getPasswords = useGetPasswords();

  // Only set the team names after hydration
  useEffect(() => {
    setTeam1(storeTeam1);
    setTeam2(storeTeam2);
  }, [storeTeam1, storeTeam2]);

  const handleSkipPlayer = async () => {
    setLoading(true);
    await getPasswords(passwordCategory);
    setTimeUp(true);
    toggleTurn();
    setTimerunning(false);
    setDeserveDouble(true);
    setLoading(false);
  };

  const handleSkipTurn = () => {
    setDeserveDouble(false);
    setTimeUp(true);
    setShowName(true);
    setTimerunning(true);
  };

  const handleStartTime = () => {
    setShowName(true);
    setTimerunning(true);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div>
        <button
          type="button"
          dir="rtl"
          className="flex items-center justify-center gap-1 text-center text-white bg-cyan-600 hover:bg-cyan-700 font-semibold py-2 px-5 rounded-2xl shadow-md disabled:opacity-30"
          onClick={handleStartTime}
          disabled={timeIsRunning}
        >
          <MdOutlineTimer size={32} />
          أبدأ Time
        </button>
      </div>
      <div className="flex flex-wrap justify-center gap-3 items-center my-2">
        <button
          type="button"
          dir="rtl"
          className="flex items-center justify-center gap-1 text-center text-white bg-cyan-600 hover:bg-cyan-700 py-1 px-4 rounded-2xl shadow-md disabled:opacity-30"
          onClick={handleSkipPlayer}
          disabled={loading || !showName || !deserveDouble}
        >
          {loading ? (
            "Loading ..."
          ) : (
            <>
              <BsSkipForwardBtn size={24} />
              تتغيير اللاعب
            </>
          )}
        </button>
        <button
          type="button"
          dir="قفم"
          className="flex items-center justify-center gap-1 text-center text-white bg-cyan-600 hover:bg-cyan-700 py-1 px-4 rounded-2xl shadow-md disabled:opacity-30"
          onClick={handleSkipTurn}
          disabled={loading || !showName}
        >
          أبدأ دور الفريق المنافس
          <FaExchangeAlt size={24} />
        </button>
      </div>

      <h2
        dir="rtl"
        className={`p-4 text-sky-900 shadow-sm text-center ${
          turn == "team1" ? "bg-blue-200" : "bg-yellow-200"
        }`}
      >
        دلوقتي دور فريق {turn == "team1" ? team1 : team2}
      </h2>
    </div>
  );
}
