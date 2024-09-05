import FeedBackForm from "@/components/home/feedBackForm";
import Games from "@/components/home/games";
import Header from "@/components/UI/header";

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-74px)]">
      <section>
        <Header />
      </section>
      <section id="games">
        <Games />
      </section>
      <section id="feedback">
        <FeedBackForm />
      </section>
    </main>
  );
}
