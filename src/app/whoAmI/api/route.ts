import { getWho } from "@/services/getWho";
import { WhoList } from "@/types";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const {
    existedList,
  }: {
    existedList: WhoList;
  } = await request.json();
  const Who = await getWho(existedList);
  return NextResponse.json({ data: Who });
}
