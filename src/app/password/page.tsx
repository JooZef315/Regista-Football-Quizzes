import CluesForm from "@/components/password/cluesForm";
import CluesView from "@/components/password/cluesView";
import NameCard from "@/components/password/nameCard";
import PasswordScore from "@/components/password/passwordScore";
import Timer from "@/components/timer";

export default function Password() {
  return (
    <main className="min-h-[calc(100vh-74px)] bg-[url('/info.jpg')] bg-cover bg-center bg-no-repeat flex">
      <div className="w-11/12 flex flex-col items-center gap-4 p-6 px-6 mx-auto my-5 bg-white rounded-2xl shadow-xl">
        <Timer initialSeconds={30} />
        <NameCard name="Mo Salah" />
        <div className="w-full p-4 text-center flex flex-wrap gap-2 items-center justify-around">
          <PasswordScore team={1} score={3} />
          <PasswordScore team={2} score={5} />
        </div>
        <CluesForm />
        <CluesView />
      </div>
    </main>
  );
}
