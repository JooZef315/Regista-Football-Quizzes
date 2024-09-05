"use server";

import FeedBack from "@/models/feedBackModel";
import dbConnect from "@/utils/db";

type FeedbackFormValues = {
  name?: string;
  feedback: string;
};

export const addFeedBack = async (data: FeedbackFormValues) => {
  await dbConnect();
  try {
    const newFeedback = await FeedBack.create({
      name: data.name?.trim().toLowerCase() || "",
      message: data.feedback.trim().toLowerCase(),
    });
    console.log(newFeedback);
  } catch (error: any) {
    console.log(error);
  }
};
