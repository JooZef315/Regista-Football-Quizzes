import { getPasswordName } from "@/services/getPasswordName";
import { PasswordCategory } from "@/store/passwordStore";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const {
    existedList,
    category,
  }: {
    existedList: string[];
    category: PasswordCategory;
  } = await request.json();
  const passwords = await getPasswordName(existedList, category);
  return NextResponse.json({ data: passwords });
}
