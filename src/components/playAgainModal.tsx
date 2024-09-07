"use client";

import { useUsersStore } from "@/store/usersStore";
import { useRouter } from "next/navigation";

export default function PlayAgainModal() {
  const toggleModal = useUsersStore((state) => state.togglePlayAgainModal);
  const router = useRouter();

  const handleClick = () => {
    toggleModal();
    const currentPath = window.location.pathname;
    router.push(`/${currentPath}/info`);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Want to Play again?
        </h2>
        <button
          onClick={handleClick}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Play again!
        </button>
      </div>
    </div>
  );
}
