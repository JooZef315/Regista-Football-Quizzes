"use server";

import WhoAmI from "@/models/whoAmIModel";
import { WhoItem, WhoList } from "@/types";
import dbConnect from "@/utils/db";

export const getWho = async (existedList: WhoList) => {
  await dbConnect();
  const existedIds = existedList.map((item) => item._id);
  try {
    const whoPlayer = await WhoAmI.aggregate<WhoItem>([
      {
        $match: {
          _id: {
            $nin: [...existedIds],
          },
        },
      },
      { $sample: { size: 1 } },
    ]);
    return whoPlayer;
  } catch (error: any) {
    console.log(error);
  }
};
