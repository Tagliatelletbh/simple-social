import PostForm from "@/components/PostForm";
import React from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import { redirect } from "next/navigation";

const page = async () => {
	const session = await getServerSession(authOptions);
	if (!session) {
		redirect("/api/auth/signin");
	}
	return (
		<div className="flex items-center justify-center mt-16">
			<PostForm session={session} />
		</div>
	);
};

export default page;
