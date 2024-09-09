"use client";

import { usePasswordStore } from "@/store/passwordStore";

export default function CluesView() {
  const clues = usePasswordStore((state) => state.clues);
  return (
    <div className="max-h-[calc(50vh)] w-11/12 md:w-1/2 mx-auto bg-blue-50 text-sky-950 shadow-lg rounded-lg my-2 flex justify-center items-center p-4">
      <ul className="w-full h-full flex flex-col justify-center overflow-y-scroll p-6">
        {clues.map((clue) => {
          return (
            <li
              key={clue.clue}
              className={`px-3 py-1 rounded-md shadow-md ${
                clue.team == "team1"
                  ? "bg-blue-200 self-start"
                  : "bg-yellow-200 self-end"
              }`}
            >
              {clue.clue}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
