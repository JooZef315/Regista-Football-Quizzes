"use server";

import mongoose from "mongoose";
import WhoAmI from "@/models/whoAmIModel";
import { WhoItem } from "@/types";
import dbConnect from "@/utils/db";

export const getWho = async (existedList: string[]) => {
  const filter: any = {};
  await dbConnect();

  const existedIds: mongoose.Types.ObjectId[] = Array.from(
    new Set(existedList)
  ).map((id) => {
    return new mongoose.Types.ObjectId(id);
  });

  const countWhos = await WhoAmI.countDocuments({});

  if (existedIds.length && existedIds.length < countWhos - 1) {
    filter._id = {
      $nin: existedIds,
    };
  }

  try {
    const whoPlayer = await WhoAmI.aggregate<WhoItem>([
      {
        $match: filter,
      },
      { $sample: { size: 1 } },
    ]);
    return whoPlayer;
  } catch (error: any) {
    console.log(error);
  }
};
