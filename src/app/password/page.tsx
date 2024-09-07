import Timer from "@/components/timer";

export default function Password() {
  return (
    <main className="min-h-[calc(100vh-74px)] flex flex-col justify-center items-center gap-4 p-6">
      <Timer initialSeconds={10} />
    </main>
  );
}
