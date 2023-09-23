/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

import useFindPost from "@/hooks/find-post-hook";
import PostCard from "./PostCard";

export const Posts = () => {
	const { posts, setPosts } = useFindPost();
	const searchParams = useSearchParams();
	const search = searchParams.get("search");

	const findPostFunction = async () => {
		const values = { search };

		const response = await axios.post("/api/search", values);
		setPosts(response.data);
	};

	useEffect(() => {
		findPostFunction();
	}, [searchParams]);

	return (
		<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
			{posts.map((post: any) => (
				<PostCard
					searchTerm={search}
					key={post._id}
					name={post.name}
					title={post.title}
					content={post.content}
					avatarUrl={post.avatarUrl}
				/>
			))}
		</div>
	);
};
