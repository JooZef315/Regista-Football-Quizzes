import { FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center gap-3 p-11 bg-blue-600 text-white">
      <h1 className="font-semibold text-2xl">Regista Football Quizzes</h1>
      <div className="flex flex-col justify-center items-center gap-3">
        <span>
          Have a feedback?{" "}
          <Link
            href={"/#feedback"}
            aria-label="go to feedback"
            className="bg-white text-blue-600 hover:bg-blue-100 rounded-md px-2"
          >
            Let us know now!
          </Link>
        </span>
        <div className="flex gap-2">
          {"Let's Get in touch!"}
          <Link href={"https://www.linkedin.com/in/joozef315/"}>
            <FaLinkedin size={24} />
          </Link>
          <Link href={"https://github.com/JooZef315"}>
            <FaGithub size={24} />
          </Link>
        </div>
      </div>
      <div className="w-4/6 h-[1px] bg-white mt-4"></div>
      <p>Copyright ©2024 All rights reserved </p>
    </footer>
  );
}
