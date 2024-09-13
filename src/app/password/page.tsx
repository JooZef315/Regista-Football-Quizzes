import NameCard from "@/components/password/nameCard";
import PasswordScore from "@/components/password/passwordScore";
import PasswordUtil from "@/components/password/PasswordUtil";
import Timer from "@/components/timer";
import LoadingSpinner from "@/components/UI/loadingSpinner";
import { Suspense } from "react";

export default async function Password() {
  return (
    <main className="min-h-[calc(100vh-74px)] bg-[url('/info.jpg')] bg-cover bg-center bg-no-repeat flex">
      <Suspense fallback={<LoadingSpinner />}>
        <div className="relative w-11/12 flex flex-col justify-center items-center gap-4 p-6 px-6 mx-auto my-5 bg-white rounded-2xl shadow-xl">
          <Timer initialSeconds={30} />
          <NameCard />
          <PasswordUtil />
          <div className="w-full p-4 text-center flex flex-wrap gap-2 items-center justify-around">
            <PasswordScore team={1} />
            <PasswordScore team={2} />
          </div>
        </div>
      </Suspense>
    </main>
  );
}
