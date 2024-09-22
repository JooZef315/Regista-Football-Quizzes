import Info from "@/components/info";
import TeamsForm from "@/components/teamsForm";

export default function WhoAmIInfo() {
  const data = {
    title: "أنا مين؟",
    list: (
      <>
        <li>اختار اسم لكل فريق، أو اسم لك لو حابب تلعب لوحدك.</li>
        <li>
          في اللعبة محتاج تعرف مين اللاعب ده من 5 clues، ال clues بتظهر تباعاً
          بحيث اول واحد اصعب واحد.
        </li>
        <li>الفريقين معاهم 60 ثانية من وقت ظهور ال clue.</li>
        <li>
          الفريق اللي يعرف اللاعب صح الأول ياخد النقطة، ولو فريق خمن لاعب غلط
          بيتحرم من أنه يجاوب في ال clue اللي بعده.
        </li>
        <li>
          في حالة التعادل بعد انتهاء ال 5 clues، كل فريق معاه 3 تخمينات للاعب ده
          قبل انتهاء الدور بالتعادل (كل فريق يخمن بالتبادل مع الفريق المنافس).
        </li>
        <li>الفريق اللي يقدر يعرف 2 لاعيبة الأول هو الكسبان.</li>
        <li className="list-none font-semibold">
          ملاحظة: لو بتخمن لاعب اجنبي، اكتب اسمه English والعكس، لو لاعب محلي
          اكتب اسمه بالعربي
        </li>
      </>
    ),
  };
  return (
    <main className="min-h-[calc(100vh-74px)] w-full flex flex-col items-center gap-4">
      <Info data={data} />
      <section className="w-full">
        <TeamsForm
          allowSingle={true}
          link="/whoAmI"
          currentPath="/whoAmI/info"
        />
      </section>
    </main>
  );
}
