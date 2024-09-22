import Timer from "@/components/timer";
import LoadingSpinner from "@/components/UI/loadingSpinner";
import CluesList from "@/components/whoAmI/cluesList";
import WhoForm from "@/components/whoAmI/whoForm";
import WhoScore from "@/components/whoAmI/whoScore";
import WhoUtil from "@/components/whoAmI/whoUtil";
import { Suspense } from "react";

export default function WhoAmI() {
  return (
    <main className="min-h-[calc(100vh-74px)] bg-[url('/info.jpg')] bg-cover bg-center bg-no-repeat flex">
      <Suspense fallback={<LoadingSpinner />}>
        <div className="relative w-11/12 flex flex-col justify-center items-center gap-4 p-6 px-6 mx-auto my-5 bg-white rounded-2xl shadow-xl">
          <Timer initialSeconds={60} />
          <CluesList />
          <WhoUtil />
          <WhoForm />
          <WhoScore />
        </div>
      </Suspense>
    </main>
  );
}
