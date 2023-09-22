import postModel from "@/lib/models/post.model";
import { connectToDb } from "@/lib/mongodb";
import { NextResponse } from "next/server";

// Context from Function c:/Users/mohda/OneDrive/Desktop/Projects/simple-social/app/api/search/route.ts:POST

export async function POST(req: Request) {
	try {
		await connectToDb();

		let query = {}; // Default query to fetch all posts

		const { search } = await req.json();

		if (search) {
			// If search is defined, construct a query to search in name, title, or content
			query = {
				$or: [
					{ name: { $regex: search, $options: "i" } },
					{ title: { $regex: search, $options: "i" } },
					{ content: { $regex: search, $options: "i" } },
				],
			};
		}

		const findPosts = await postModel.find(query).sort({ timestamp: -1 });

		return NextResponse.json(findPosts, { status: 200 });
	} catch (err) {
		return new NextResponse("Internal error", { status: 500 });
	}
}
