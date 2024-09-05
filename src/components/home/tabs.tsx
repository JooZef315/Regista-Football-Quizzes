"use client";

import Link from "next/link";
import { useState } from "react";
import { IoPlayCircle } from "react-icons/io5";

type PropsType = {
  tabs: {
    label: string;
    content: JSX.Element;
    link: string;
    icon: JSX.Element;
  }[];
};
export default function Tabs({ tabs }: PropsType) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <section
        dir="rtl"
        className="w-full flex justify-evenly items-center gap-8 flex-wrap my-3"
      >
        {tabs.map((tab, index) => (
          <button
            type="button"
            key={index}
            className={`py-3 px-10 text-lg font-semibold ring-1 hover:ring-amber-300 hover:bg-amber-300 hover:text-white shadow-lg ${
              activeTab === index
                ? "bg-amber-500 text-white"
                : "bg-none text-amber-500 ring-amber-500"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </section>
      <section
        dir="rtl"
        lang="ar"
        className="bg-amber-500 w-full flex flex-col-reverse md:flex-row justify-between items-center p-4 shadow-xl rounded-sm text-white"
      >
        <div className="h-full w-full flex flex-col justify-center items-center gap-4 py-7 px-2">
          <h1 className="font-bold text-4xl">{tabs[activeTab].label}</h1>
          {tabs[activeTab].content}
          <Link
            href={tabs[activeTab].link}
            aria-label="go to risk game"
            dir="auto"
            className="flex gap-2 justify-center items-center text-center bg-white text-yellow-500 hover:bg-yellow-50 px-5 py-3 shadow-lg rounded-xl"
          >
            أبدأ لعب
            <IoPlayCircle size={32} />
          </Link>
        </div>
        {tabs[activeTab].icon}
      </section>
    </>
  );
}
