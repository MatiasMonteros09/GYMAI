import { NextResponse } from "next/server";
import { db } from "@/libs/db";

//Se utiliza para agregar rutinas

export async function POST(request) {
  try {
    const { response, creatorId } = await request.json();

    console.log(creatorId, response);

    const newRoutine = await db.routine.create({
      data: {
        description: response,
        creatorId,
      },
    });

    console.log(newRoutine);

    return NextResponse.json(
      { newRoutine, message: "Successful created Routine" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong!" },
      { status: 500 }
    );
  }
}

export async function GET() {
  const routines = await db.Routine.findMany();

  return NextResponse.json(routines);
}
