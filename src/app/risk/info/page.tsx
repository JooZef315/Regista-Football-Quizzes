import Info from "@/components/info";
import TeamsForm from "@/components/teamsForm";

export default function RiskInfo() {
  const data = {
    title: "Risk",
    list: (
      <>
        <li>اختار اسم لكل فريق، أو اسم لك لو حابب تلعب لوحدك.</li>
        <li>
          اللعبة مكونة من 4 مواضيع، كل موضوع فيه 4 أسئلة مختلفين في الصعوبة،
          درجة كل سؤال بتتحدد حسب صعوبته، الدرجات هي: 5، 10، 20، 40.
        </li>
        <li>
          كل فريق بيختار سؤال يجاوب عليه في 30 ثانية، بعدها الإجابة بتظهر، لو صح
          الفريق بياخد نقط السؤال (الفريق يقدر يزود لنفسه نقط السؤال).
        </li>
        <li>
          في دور الفريق ممكن يختار وسائل مساعدة زي انه يزود 30 ثانية لسؤال واحد،
          او يشوف اختيارات لسؤال واحد.
        </li>
        <li>
          كمان لكل فريق فرصة واحدة انه يسرق سؤال من الفريق المنافس بشرط يكون عدى
          15 ثانية من الوقت والفريق المنافس لسه مجاوبش وان الفريق منافس يكون مش
          مستخدم وسيلة مساعدة في الدور ده.
        </li>
        <li>في كل لعبة فيه سؤال عشوائي بيكون دابل النقط (نقط السؤال * 2).</li>
        <li>الفريق اللي يقدر يجمع نقط اكتر بعد نهاية اللعبة هو الكسبان.</li>
      </>
    ),
  };
  return (
    <main className="min-h-[calc(100vh-74px)] w-full flex flex-col items-center gap-4">
      <Info data={data} />
      <section className="w-full">
        <TeamsForm allowSingle={true} link="/risk" currentPath="/risk/info" />
      </section>
    </main>
  );
}
