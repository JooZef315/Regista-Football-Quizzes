"use server";

import Password from "@/models/passwordModel";
import { PasswordCategory } from "@/store/passwordStore";
import { PasswordsItem, PasswordsList } from "@/types";
import dbConnect from "@/utils/db";

export const getPasswordList = async (
  existedList: PasswordsList,
  category: PasswordCategory
) => {
  await dbConnect();
  const filter: any = {};
  const existedIds = existedList.map((item) => item._id);

  const countPasswords = await Password.countDocuments();

  if (existedIds.length && existedIds.length < countPasswords - 9) {
    filter._id = { $nin: existedIds };
  }

  if (category !== "mix") {
    filter.category = category;
  }

  try {
    const passwords = await Password.aggregate<PasswordsItem>([
      { $match: filter },
      { $sample: { size: 9 } },
    ]);
    return passwords;
  } catch (error: any) {
    console.log(error);
  }
};
