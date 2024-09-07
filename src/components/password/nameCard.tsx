export default function NameCard({ name }: { name: string }) {
  return (
    <div
      dir="auto"
      className="m-3 bg-amber-500 p-7 font-semibold text-center text-5xl text-white ring-1 ring-sky-950 shadow-xl rounded-sm"
    >
      {name}
    </div>
  );
}
