"use server";

import Password from "@/models/passwordModel";
import { PasswordCategory } from "@/store/passwordStore";
import { PasswordsItem } from "@/types";
import dbConnect from "@/utils/db";
import mongoose from "mongoose";

export const getPasswordName = async (
  existedList: string[],
  category: PasswordCategory
) => {
  await dbConnect();
  const filter: any = {};

  const existedIds: mongoose.Types.ObjectId[] = Array.from(
    new Set(existedList)
  ).map((id) => {
    return new mongoose.Types.ObjectId(id);
  });
  const countPasswords = await Password.countDocuments();

  if (existedIds.length && existedIds.length < countPasswords - 1) {
    filter._id = { $nin: existedIds };
  }

  if (category !== "mix") {
    filter.category = category;
  }

  try {
    const passwordName = await Password.aggregate<PasswordsItem>([
      { $match: filter },
      { $sample: { size: 1 } },
    ]);
    return passwordName;
  } catch (error: any) {
    console.log(error);
  }
};
