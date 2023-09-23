import postModel from "@/lib/models/post.model";
import { connectToDb } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	try {
		await connectToDb();
		const body = await req.json();

		const { name, title, content, avatarUrl } = body;

		if (!name || !title || !content) {
			return new NextResponse("Missing data", {
				status: 400,
			});
		}

		const createPost = await postModel.create({
			name,
			title,
			content,
			avatarUrl,
		});

		return NextResponse.json(
			{
				data: createPost,
			},
			{
				status: 201,
			}
		);
	} catch (error) {
		console.log("[POST_ROUTE]", error);
		return new NextResponse("Internal error", { status: 500 });
	}
}
