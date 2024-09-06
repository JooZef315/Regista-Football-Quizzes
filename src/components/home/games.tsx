import { AiOutlineTable } from "react-icons/ai";
import { MdQuestionMark } from "react-icons/md";
import { PiPasswordDuotone } from "react-icons/pi";
import Tabs from "./tabs";
import { Suspense } from "react";
import LoadingSpinner from "../UI/loadingSpinner";

export default function Games() {
  const tabs = [
    {
      label: "Risk",
      content: (
        <p className="font-semibold text-wrap text-start leading-8">
          اللعبة فيها 16 سؤال عن 4 مواضيع مختلفة، كل موضوع فيه 4 أسئلة، درجة كل
          سؤال بتتحدد حسب صعوبته بحيث الأصعب عليه 40 درجة والأسهل عليه 5 درجات.{" "}
          <br />
          كل فريق بيختار في دوره السؤال اللى يحب يجاوب عليه حسب الريسك اللى عايز
          ياخده. <br />
          كل فريق كمان ممكن يسرق سؤال من الفريق التاني! وكل فريق عنده وسائل
          مساعدة زي انه يزود وقت او يختار الإجابة من اختيارت.
        </p>
      ),
      link: "/risk/info",
      icon: <AiOutlineTable className="w-1/3 h-1/3" />,
    },
    {
      label: "أنا مين؟",
      content: (
        <p className="font-semibold text-wrap text-start leading-8">
          في اللعبة كل فريق بيحاول يعرف مين اللاعب ده قبل الفريق التاني، اللعبة
          هتظهر 5 clues عن اللاعب بالترتيب من الأصعب للأسهل، بعد كل clue
          الفريقين عندهم دقيقة يخمنوا مين اللاعب قبل ظهور ال clue الجديد. <br />
          والفريق اللي يعرف 2 لاعيبة الأول يكسب. وفي اللعبة فيه شرح أكتر! جرب
          دلوقتي.
        </p>
      ),
      link: "whoAmI/info",
      icon: <MdQuestionMark className="w-1/3 h-1/3" />,
    },
    {
      label: "Password",
      content: (
        <p className="font-semibold text-wrap text-start leading-8">
          في اللعبة فرد من كل فريق بيشوف اسم لاعب ما محلي او عالمي، مطلوب من منه
          انه يخلي صاحبه يعرف مين اللاعب ده قبل الفريق التاني، والفريق اللي يجيب
          5 الأول يكسب. <br />
          ممنوع أي فريق يقول أسماء أشخاص او بلاد او نوادي او أرقام تيشرتات
          اللاعب ده.
        </p>
      ),
      link: "/password/info",
      icon: <PiPasswordDuotone className="w-1/3 h-1/3" />,
    },
  ];
  return (
    <main className="min-h-[calc(100vh-74px)] w-full md:w-4/5 mx-auto flex flex-col justify-center items-center gap-3 p-6">
      <h1
        dir="rtl"
        className="text-center text-amber-500 font-bold text-3xl my-5"
      >
        ألعب دلوقتي!
      </h1>
      <Suspense fallback={<LoadingSpinner />}>
        <Tabs tabs={tabs} />
      </Suspense>
    </main>
  );
}
