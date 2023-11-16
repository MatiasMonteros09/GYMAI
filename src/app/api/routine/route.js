import { NextResponse } from "next/server";
import { db } from "@/libs/db";


//Se utilizó para agregar las body parts

// export async function POST(request) {
//   try {
//     const { name } = await request.json();

//     const existingBodyPart = await db.bodyPart.findUnique({
//       where: { name: name },
//     });


//     //Contola si ya existe body part
//     if (existingBodyPart) {
//       return NextResponse.json(
//         { body: null, message: "Body already exists" },
//         { status: 400 }
//       );
//     }

//      const newBodyPart = await db.bodyPart.create({
//       data: {
//         name,
//       },
//     });


//     return NextResponse.json(
//       { newBodyPart, message: "Successful registration" },
//       { status: 201 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { message: "Something went wrong!" },
//       { status: 500 }
//     );
//   }
// }
