import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const users = await prisma.user.findMany();

  return NextResponse.json(users);
}

export async function POST(request) {
  const { name, lastname, password, email } = await request.json();
  const newUser = await prisma.user.create({
    data: {
      name,
      lastname,
      password,
      email
    },
  });
  return NextResponse.json(newUser);
}
