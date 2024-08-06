import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// Handler for GET requests
export const GET = async (req) => {
  // Extract search parameters from the request URL
  const { searchParams } = new URL(req.url);

  const page = searchParams.get("page"); // Page number for pagination
  const cat = searchParams.get("cat"); // Category filter
  const search = searchParams.get("search"); // Search query for title

  const POST_PER_PAGE = 2; // Number of posts to display per page

  // Construct the query for fetching posts
  const query = {
    take: POST_PER_PAGE, // Limit the number of posts
    skip: POST_PER_PAGE * (page - 1), // Skip posts based on the current page
    where: {
      ...(cat && { catSlug: cat }), // Filter by category if provided
      ...(search && {
        title: {
          contains: search,
          mode: "insensitive", // Case insensitive search
        },
      }),
    },
  };

  try {
    // Fetch posts and count from the database
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query), // Fetch posts based on query
      prisma.post.count({ where: query.where }), // Count total posts matching the query
    ]);
    // Return the posts and count in the response
    return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
  } catch (err) {
    console.log(err); // Log any errors that occur
    // Return an error response if something goes wrong
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

// Handler for POST requests to create a new post
export const POST = async (req) => {
  // Get the authentication session
  const session = await getAuthSession();

  // Check if the user is authenticated
  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }

  try {
    // Parse the request body
    const body = await req.json();
    // Create a new post in the database with the request body and user email
    const post = await prisma.post.create({
      data: { ...body, userEmail: session.user.email },
    });

    // Return the created post in the response
    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(err); // Log any errors that occur
    // Return an error response if something goes wrong
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
