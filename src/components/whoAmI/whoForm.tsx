/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { MdOutlineQuestionAnswer } from "react-icons/md";
import Fuse from "fuse.js";

import { useUsersStore } from "@/store/usersStore";
import { useWhoStore } from "@/store/whoStore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function WhoForm() {
  const isSingle = useUsersStore((state) => state.isSingle);
  const singleName = useUsersStore((state) => state.singleName);
  const timeIsRunning = useUsersStore((state) => state.timeIsRunning);
  const team1Name = useUsersStore((state) => state.team1Name);
  const team2Name = useUsersStore((state) => state.team2Name);

  const suspended = useWhoStore((state) => state.suspended);
  const answer = useWhoStore((state) => state.answer);
  const counter = useWhoStore((state) => state.counter);
  const startStriking = useWhoStore((state) => state.startStriking);

  const setTimeUp = useUsersStore((state) => state.setTimeUp);

  const addScore = useWhoStore((state) => state.addScore);
  const addStrike = useWhoStore((state) => state.addStrike);
  const setSuspended = useWhoStore((state) => state.setSuspended);
  const setStartStriking = useWhoStore((state) => state.setStartStriking);

  const [toPlay, setToPlay] = useState<"1" | "2">("1");
  const [userInput, setUserInput] = useState<string>("");

  const fuse = new Fuse([answer.toLowerCase()], { includeScore: true });

  useEffect(() => {
    if (suspended == "team1") {
      setToPlay("2");
    } else {
      setToPlay("1");
    }
  }, [suspended]);

  const handleAnswer = () => {
    setUserInput("");
    const result = fuse.search(userInput.trim().toLowerCase());
    if (result.length && result[0].score! < 0.5) {
      if (isSingle) {
        addScore("single");
      } else if (toPlay == "1") {
        addScore("team1");
      } else {
        addScore("team2");
      }
      toast.success("🎉🎉 اجابة صح!" + "\n" + `اللاعب هو ${answer}`);
    } else {
      if (toPlay == "1") {
        if (counter == 5) {
          startStriking ? addStrike("team1") : setStartStriking(true);
          setSuspended("team1");
          toast.error(
            "اجابة غلط، دلوقتي الفريق المنافس بس له الحق انه يجاوب على الclue الجديد"
          );
        } else {
          setSuspended("team1");
          setTimeUp(true);
          toast.error(
            "اجابة غلط، دلوقتي الفريق المنافس بس له الحق انه يجاوب على الclue الجديد"
          );
        }
      }
      if (toPlay == "2") {
        if (counter == 5) {
          startStriking ? addStrike("team2") : setStartStriking(true);
          setSuspended("team2");
          toast.error(
            "اجابة غلط، دلوقتي الفريق المنافس بس له الحق انه يجاوب على الclue الجديد"
          );
        } else {
          setSuspended("team2");
          setTimeUp(true);
          toast.error(
            "اجابة غلط، دلوقتي الفريق المنافس بس له الحق انه يجاوب على الclue الجديد"
          );
        }
      }
      if (isSingle) {
        if (counter == 5) {
          startStriking ? addStrike("single") : setStartStriking(true);
          setSuspended("single");
          setToPlay("2");
        } else {
          setSuspended("single");
          setToPlay("2");
        }
      }
    }
  };

  return (
    <section className="w-full">
      <div className="flex flex-col justify-center items-center gap-2">
        {isSingle ? (
          <button
            type="button"
            className={`flex-1 text-center px-5 py-3 ring-1 ring-amber-500 rounded-lg cursor-pointer transition-all duration-300 ease-in-out bg-amber-500 text-white disabled:opacity-30`}
            disabled={suspended == "single"}
          >
            {singleName}
          </button>
        ) : (
          <div className="w-4/5 md:w-1/2 mx-auto flex justify-center items-center px-10 pt-10">
            <button
              type="button"
              onClick={() => setToPlay("1")}
              className={`flex-1 text-center px-5 py-3 ring-1 ring-amber-500 rounded-l-lg cursor-pointer transition-all duration-300 ease-in-out disabled:opacity-30 ${
                toPlay == "1"
                  ? "bg-amber-500 text-white"
                  : "text-amber-500 bg-white"
              }`}
              disabled={suspended == "team1"}
            >
              {team1Name}
            </button>
            <button
              type="button"
              onClick={() => setToPlay("2")}
              className={`flex-1 text-center p-3 ring-1 ring-amber-500 rounded-r-lg cursor-pointer transition-all duration-300 ease-in-out disabled:opacity-30 ${
                toPlay == "2"
                  ? "bg-amber-500 text-white"
                  : "text-amber-500 bg-white"
              }`}
              disabled={suspended == "team2"}
            >
              {team2Name}
            </button>
          </div>
        )}
        <input
          type="text"
          dir="rtl"
          name="answer"
          id="answer"
          className="w-4/5 md:w-2/4 text-sky-900 py-3 px-4 rounded-2xl border-none ring-1 ring-amber-500 placeholder:text-amber-500 placeholder:opacity-60"
          placeholder="اكتب اجابتك هنا ..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
        <button
          type="button"
          dir="rtl"
          className="flex items-center justify-center gap-1 text-center text-white bg-cyan-600 hover:bg-cyan-700 font-semibold py-2 px-3 rounded-2xl shadow-md disabled:opacity-30"
          onClick={handleAnswer}
          disabled={!userInput.trim() || !counter || !timeIsRunning}
        >
          <MdOutlineQuestionAnswer size={26} />
          جاوب
        </button>
      </div>
    </section>
  );
}
