import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    
    if (!prisma) {
      
      throw new Error('Prisma is not initialized');
    }

    if (!prisma.category) {
     
      throw new Error('Prisma category is undefined');
    }

    const categories = await prisma.category.findMany();
    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
  }
};





// import prisma from "@/utils/connect";
// import { NextResponse } from "next/server";

// export const GET = async () => {
//   try {
//     const categories = await prisma.category.findMany();

//     return new NextResponse(JSON.stringify(categories, { status: 200 }));
//   } catch (err) {
//     console.log(err);
//     return new NextResponse(
//       JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
//     );
//   }
// };
