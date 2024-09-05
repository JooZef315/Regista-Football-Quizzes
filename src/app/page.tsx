import FeedBackForm from "@/components/home/feedBackForm";
import Games from "@/components/home/games";
import Header from "@/components/UI/header";
import LoadingSpinner from "@/components/UI/loadingSpinner";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-74px)]">
      <section>
        <Header />
      </section>
      <section id="games">
        <Games />
      </section>
      <section
        id="feedback"
        className="bg-yellow-300 min-h-[calc(100vh-74px)] w-full flex flex-col justify-center items-center gap-3 p-6"
      >
        <h1
          dir="rtl"
          className="text-center text-sky-950 font-bold text-3xl mb-5"
        >
          لو عندك أي اقتراحات
        </h1>
        <Suspense fallback={<LoadingSpinner />}>
          <FeedBackForm />
        </Suspense>
      </section>
    </main>
  );
}
