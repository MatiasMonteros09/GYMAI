import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const users = await prisma.user.findMany();
  console.log(users);

  return NextResponse.json(users);
}

export async function POST(request) {
  const { name, password } = await request.json();
  const newUser = await prisma.user.create({
    data: {
      name,
      password,
    },
  });
  return NextResponse.json(newUser);
}
