import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET() {
  const users = await prisma.user.findMany();

  return NextResponse.json(users);
}

export async function POST(request) {
  try {
    const { username, password, email } = await request.json();

    const existingUserByEmail = await prisma.user.findUnique({
      where: { email: email },
    });

    if (existingUserByEmail) {
      return NextResponse.json(
        { user: null, message: "Ya existe un usuario con ese Email" },
        { status: 409 }
      );
    }

    const newUser = await prisma.user.create({
      data: {
        username,
        password,
        email,
      },
    });
    return NextResponse.json(newUser);
  } catch (error) {}
}
