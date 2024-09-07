"use client";

import { useUsersStore } from "@/store/usersStore";

export default function WinnerModal({ name }: { name: string }) {
  const toggleModal = useUsersStore((state) => state.toggleWinnerModal);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4 text-center">
          🎉 We have a Winner! 🎉
        </h2>
        <p className="text-center mb-6">
          Congratulations to <span className="font-bold">{name}</span>!
        </p>
        <button
          onClick={() => toggleModal()}
          className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}
