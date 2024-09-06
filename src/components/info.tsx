type PropsType = {
  data: {
    title: string;
    list: JSX.Element;
  };
};

export default function Info({ data }: PropsType) {
  return (
    <section
      dir="auto"
      className="min-h-[80vh] w-full bg-[url('/info.jpg')] bg-cover bg-center bg-no-repeat flex justify-center items-center p-6"
    >
      <div className="w-11/12 md:w-4/5 flex flex-col justify-center items-center gap-3 py-3 px-6 mx-auto my-5 bg-white rounded-2xl shadow-xl">
        <h1 dir="auto" className="font-bold text-4xl text-amber-500 mt-4">
          {data.title}
        </h1>
        <ol
          dir="rtl"
          className="list-decimal leading-8 p-4 text-cyan-600 text-wrap"
        >
          {data.list}
        </ol>
      </div>
    </section>
  );
}
