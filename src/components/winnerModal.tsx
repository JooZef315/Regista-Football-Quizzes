"use client";

import { usePasswordStore } from "@/store/passwordStore";
import { useUsersStore } from "@/store/usersStore";
import { useRouter } from "next/navigation";

export default function WinnerModal({ currentPath }: { currentPath: string }) {
  const team1Name = useUsersStore((state) => state.team1Name);
  const team2Name = useUsersStore((state) => state.team2Name);
  const winner = usePasswordStore((state) => state.winner);
  const resetGames = useUsersStore((state) => state.resetGames);

  const router = useRouter();

  const handlePlayAgain = () => {
    resetGames();
    router.push(`${currentPath}/info`);
  };

  const handleBackToHome = () => {
    resetGames();
    router.push("/#games");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">
          🎉 We have a Winner! 🎉
        </h2>
        <p className="text-center mb-6">
          Congratulations to{" "}
          <span className="font-bold">
            {winner == "team1" ? team1Name : team2Name}
          </span>
          !
        </p>
        <button
          dir="rtl"
          onClick={() => handlePlayAgain()}
          className="my-1 w-3/4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          إلعب تاني!{" "}
        </button>
        <button
          dir="rtl"
          onClick={() => handleBackToHome()}
          className="my-1 w-3/4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          العودة للصفحة الرئيسية
        </button>
      </div>
    </div>
  );
}
