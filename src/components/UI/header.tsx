import Image from "next/image";
import Link from "next/link";
import { IoPlayCircle } from "react-icons/io5";

export default function Header() {
  return (
    <header className="min-h-[calc(100vh-74px)] flex flex-col md:flex-row justify-center items-center gap-4 p-6 pb-10 text-white bg-blue-600 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')]">
      <Image
        alt="header image"
        src={"/header.png"}
        width={420}
        height={420}
        // className="hidden md:inline-block"
      />
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-center text-4xl font-bold">
          <span className="bg-white text-blue-600 rounded-2xl px-4 shadow-md">
            Regista
          </span>{" "}
          Football Quizzes
        </h1>
        <p dir="rtl" className="italic text-center my-2">
          هتقدر تنافس صحابك وتختبر معلوماتك في كرة القدم
          <br />
          ورينا أنت بتعرف الكورة قد إيه! جاهز للتحدي؟
        </p>
        <Link
          href={"/#games"}
          aria-label="go to games section"
          dir="auto"
          className="flex gap-2 justify-center items-center text-center bg-white text-blue-600 hover:bg-blue-100 px-5 py-3 shadow-lg rounded-xl"
        >
          ألعب دلوقتي!
          <IoPlayCircle size={32} />
        </Link>
      </div>
    </header>
  );
}
