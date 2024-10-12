import Info from "@/components/info";
import TeamsForm from "@/components/teamsForm";

export default function SquadInfo() {
  const data = {
    title: "مين X الصورة",
    list: (
      <>
        <li>اختار اسم لكل فريق.</li>
        <li>
          في دور الفريق لاعب واحد هو اللي يجاوب، اللاعب ده معاه 15 ثانية يقدر
          يقول فيهم اسم لاعب موجود في الصورة.
        </li>
        <li>
          بعدها بيكون الفريق المنافس له دورين ورا بعض، بعدها يرجع دور زميله في
          الفريق، وبعدها يرجع الدور إلى اللاعب اللي بدأ.
        </li>
        <li>
          اللاعب اللي يجاوب مرتين غلط، ملوش الحق يجاوب تاني. (زميله بيكمل الدور
          لوحده).
        </li>
        <li>الفريق اللي يقدر يقول أسماء اكتر ياخد نقطة.</li>
        <li>
          لو فريق كل افراده ممنوعين من الإجابة، الفريق المنافس ياخد النقطة.
        </li>
        <li>الفريق اللي يتفوق في صورتين يكسب الدور! </li>
      </>
    ),
  };
  return (
    <main className="min-h-[calc(100vh-74px)] w-full flex flex-col items-center gap-4">
      <Info data={data} />
      <section className="w-full">
        <TeamsForm
          allowSingle={false}
          link="/squads"
          currentPath="/squads/info"
        />
      </section>
    </main>
  );
}
