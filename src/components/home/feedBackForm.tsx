"use client";

import { addFeedBack } from "@/actions/addFeedBack";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type FeedbackFormValues = {
  name?: string;
  feedback: string;
};

export default function FeedBackForm() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FeedbackFormValues>();

  const onSubmit = async (data: FeedbackFormValues) => {
    setLoading(true);
    try {
      await addFeedBack(data);
      reset();
      toast.success("تم ارسال الاقتراح بنجاح");
      setLoading(false);
    } catch (error: any) {
      toast.error(error.message || "Invalid submission, please try again.");
      setLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      dir="rtl"
      className="w-full md:w-4/5 mx-auto flex flex-col gap-3 p-4"
    >
      <div className="w-full">
        <input
          type="text"
          {...register("name")}
          className="w-full py-3 px-5 text-sky-950 ring-1 ring-sky-950"
          name="name"
          id="name"
          placeholder="أسمك لو حابب"
        />
      </div>
      <div className="w-full">
        <textarea
          {...register("feedback", { required: "Feedback is required" })}
          rows={5}
          className="w-full py-3 px-5 text-sky-950 ring-1 ring-sky-950"
          name="feedback"
          id="feedback"
          placeholder="اكتب اقتراحك هنا ..."
        />
        {errors.feedback && (
          <p className="text-red-700 p-1">{errors.feedback.message}</p>
        )}
      </div>
      <div className="w-full">
        <button
          dir="ltr"
          type="submit"
          disabled={loading}
          className="w-full py-3 px-5 bg-sky-950 hover:bg-sky-900 text-white disabled:bg-sky-500 shadow-md"
        >
          {loading ? "Submitting ..." : "Submit"}
        </button>
      </div>
    </form>
  );
}
