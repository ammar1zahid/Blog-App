import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// Handler for GET requests to fetch categories
export const GET = async () => {
  try {
    // Check if Prisma client is initialized
    if (!prisma) {
      throw new Error('Prisma is not initialized');
    }

    // Check if the category model is defined
    if (!prisma.category) {
      throw new Error('Prisma category is undefined');
    }

    // Fetch all categories from the database
    const categories = await prisma.category.findMany();

    // Return the categories as JSON with a 200 status code
    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (err) {
    // Log the error for debugging
    console.log(err);
    
    // Return a 500 status code with an error message
    return new NextResponse(JSON.stringify({ message: "Something went wrong!" }), { status: 500 });
  }
};
