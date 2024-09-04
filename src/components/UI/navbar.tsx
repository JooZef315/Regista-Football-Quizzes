import Image from "next/image";
import Link from "next/link";
import { IoPlayCircle } from "react-icons/io5";

export default function Navbar() {
  return (
    <nav className="bg-white flex text-center justify-around items-center py-5 mx-auto shadow-md sticky top-0 z-50">
      <div className="flex justify-center items-center text-center gap-1 text-blue-600 font-semibold">
        <Link href="/" aria-label="to home page">
          <Image alt="icon" src={"/icon.png"} width={32} height={32} />
        </Link>
        <Link href="/" aria-label="to home page">
          <h1 className="text-xl self-center hover:text-blue-700">Regista</h1>
        </Link>
      </div>
      <Link
        href={"/#games"}
        aria-label="to games section"
        className="flex items-center justify-center gap-1 text-center text-white bg-blue-600 hover:bg-blue-700 py-1 px-4 rounded-2xl shadow-md"
      >
        To Games
        <IoPlayCircle size={26} />
      </Link>
    </nav>
  );
}
