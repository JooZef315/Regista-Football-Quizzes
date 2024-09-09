import { getPasswordList } from "@/services/getPasswordList";
import { PasswordCategory } from "@/store/passwordStore";
import { PasswordsList } from "@/types";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const {
    existedList,
    category,
  }: {
    existedList: PasswordsList;
    category: PasswordCategory;
  } = await request.json();
  console.log(existedList, category);
  const passwords = await getPasswordList(existedList, category);
  return NextResponse.json({ data: passwords });
}
