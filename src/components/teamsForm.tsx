"use client";

import { useUsersStore } from "@/store/usersStore";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoPlayCircle } from "react-icons/io5";
import { toast } from "react-toastify";

type TeamsFormValues = {
  team1: string;
  team2: string;
  singleName: string;
};

export default function TeamsForm({ allowSingle }: { allowSingle: boolean }) {
  const [loading, setLoading] = useState(false);
  const [singleMode, setSingleMode] = useState(false);

  const team1Name = useUsersStore((state) => state.team1Name);
  const team2Name = useUsersStore((state) => state.team2Name);
  const singleName = useUsersStore((state) => state.singleName);
  const setTeamsNames = useUsersStore((state) => state.setTeamsNames);
  const setSingleName = useUsersStore((state) => state.setSingleName);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TeamsFormValues>({
    defaultValues: {
      team1: typeof window !== "undefined" ? team1Name : "team 1",
      team2: typeof window !== "undefined" ? team2Name : "team 2",
      singleName: typeof window !== "undefined" ? singleName : "user",
    },
  });

  const onSubmit = async (data: TeamsFormValues) => {
    setLoading(true);
    try {
      if (!singleMode) {
        setTeamsNames({ team1: data.team1, team2: data.team2 });
      } else {
        setSingleName({ single: data.singleName });
      }
    } catch (error) {
      toast.error("Invalid names/names, please try again.");
    }
    setLoading(false);
  };
  return (
    <>
      {allowSingle && (
        <div className="w-4/5 md:w-1/2 mx-auto flex justify-center items-center px-10 pt-10">
          <button
            type="button"
            onClick={() => setSingleMode(false)}
            className={`flex-1 text-center p-3 ring-1 ring-amber-500 rounded-l-lg cursor-pointer transition-all duration-300 ease-in-out ${
              !singleMode
                ? "bg-amber-500 text-white"
                : "text-amber-500 bg-white"
            }`}
          >
            Teams
          </button>
          <button
            type="button"
            onClick={() => setSingleMode(true)}
            className={`flex-1 text-center p-3 ring-1 ring-amber-500 rounded-r-lg cursor-pointer  transition-all duration-300 ease-in-out ${
              singleMode ? "bg-amber-500 text-white" : "text-amber-500 bg-white"
            }`}
          >
            Single
          </button>
        </div>
      )}
      <form
        dir="rtl"
        onSubmit={handleSubmit(onSubmit)}
        className="w-4/5 md:w-1/2 mx-auto flex flex-col justify-center items-center gap-5 py-12 px-10"
      >
        {!singleMode && (
          <>
            <div className="w-full">
              <input
                {...register("team1")}
                className="w-full py-3 px-5 text-amber-500 ring-1 ring-amber-500 focus:ring-amber-500  focus:outline-none placeholder:text-amber-500"
                type="text"
                name="team1"
                id="team1"
                placeholder="اسم الفريق الأول"
              />
              {errors.team1 && (
                <p className="text-red-700 p-1">{errors.team1.message}</p>
              )}
            </div>
            <div className="w-full">
              <input
                {...register("team2")}
                className="w-full py-3 px-5 text-amber-500 ring-1 ring-amber-500 focus:ring-amber-500  focus:outline-none placeholder:text-amber-500"
                type="text"
                name="team2"
                id="team2"
                placeholder="اسم الفريق التاني"
              />
              {errors.team2 && (
                <p className="text-red-700 p-1">{errors.team2.message}</p>
              )}
            </div>
          </>
        )}
        {singleMode && (
          <div className="w-full">
            <input
              {...register("singleName")}
              className="w-full py-3 px-5 text-amber-500 ring-1 ring-amber-500 focus:ring-amber-500  focus:outline-none placeholder:text-amber-500"
              type="text"
              name="singleName"
              id="singleName"
              placeholder="اسم اللاعب"
            />
            {errors.singleName && (
              <p className="text-red-700 p-1">{errors.singleName.message}</p>
            )}
          </div>
        )}
        <button
          type="submit"
          disabled={loading}
          dir="auto"
          className="flex gap-2 justify-center items-center text-center bg-white text-yellow-500 text-xl hover:bg-yellow-50 px-8 py-4 shadow-lg rounded-xl"
        >
          {loading ? "Loading ..." : "أبدأ لعب"}
          <IoPlayCircle size={36} />
        </button>
      </form>
    </>
  );
}
