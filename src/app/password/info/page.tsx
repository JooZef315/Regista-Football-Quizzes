import Info from "@/components/info";
import TeamsForm from "@/components/teamsForm";

export default function PasswordInfo() {
  const data = {
    title: "Password",
    list: (
      <>
        <li>اختار اسم لكل فريق</li>
        <li>
          الفريق اللي عليه الدور معاه 30 ثانية يقول فيها ال clue ويخمن اسم
          اللاعب
        </li>
        <li>لازم الفريق يقول clue حتى لو الوقت خلص.</li>
        {/* <li>لو فريق عرف اللاعب صح من أول clue، الفريق ياخد نقطتين.</li> */}
        <li>
          الأفراد من كل فريق اللي عارفين اسم اللاعب مسؤولين عن انهم يضيفوا النقط
          لو فريقهم جاوب صح.
        </li>
        <li>
          لو فريق قال اسم شخص / نادي / بلد / تاريخ / رقم تيشرت / clue من كلمتين،
          الفريق التاني من حقه يقول 2 clues في الدور بتاعه
        </li>
        <li>
          مع كل إجابة غلط ممكن تضيفوا ال clue في اللعبة عشان لو حد ناسي، ولو حد
          قال اسم اللاعب نفسه النقطة تروح للفريق المنافس.
        </li>
        <li>الفريق اللي يجيب 5 نقط الأول يكسب</li>
      </>
    ),
  };
  return (
    <main className="min-h-[calc(100vh-74px)] w-full flex flex-col items-center gap-4">
      <Info data={data} />
      <section className="w-full">
        <TeamsForm allowSingle={false} link="/password" />
      </section>
    </main>
  );
}
