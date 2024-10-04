import { getWho } from "@/services/getWho";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const {
    existedList,
  }: {
    existedList: string[];
  } = await request.json();
  const Who = await getWho(existedList);
  return NextResponse.json({ data: Who });
}
