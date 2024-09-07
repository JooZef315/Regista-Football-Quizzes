import PlayAgainModal from "@/components/playAgainModal";
import Timer from "@/components/timer";
import WinnerModal from "@/components/winnerModal";

export default function Password() {
  return (
    <main className="min-h-[calc(100vh-74px)] flex flex-col items-center gap-4 p-6">
      <Timer initialSeconds={10} />
    </main>
  );
}
