"use client";

import usePostForm from "@/hooks/post-hook";
import Link from "next/link";
import axios from "axios";
import { redirect } from "next/navigation";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";
import toast from "react-hot-toast";

const PostForm = ({ session }: any) => {
	const { title, setTitle, content, setContent } = usePostForm();

	const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
	};

	const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setContent(e.target.value);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const values = { name, title, content };

		await axios.post("/api/post", {
			title,
			content,
			name: session?.user?.name,
			avatarUrl: session?.user?.image,
		});

		toast.success(`Successfully posted ${title}`);

		setTimeout(() => {
			window.location.assign("/");
		}, 1500);
	};

	return (
		<div className="space-y-3">
			<form onSubmit={handleSubmit}>
				<div className="grid grid-cols-1 grid-rows-1 gap-1 w-[450px]">
					<div>
						<Label htmlFor="title">Title</Label>
						<Input
							id="title"
							type="text"
							value={title}
							onChange={handleTitleChange}
						/>
					</div>
					<div>
						<Label htmlFor="content">Content</Label>
						<Textarea
							id="content"
							rows={10}
							value={content}
							onChange={handleContentChange}
						/>
					</div>
				</div>

				<div className="flex justify-end space-x-2 mt-2">
					<Link href={"/"}>
						<Button variant={"destructive"}>Cancel</Button>
					</Link>
					<Button
						type="submit"
						variant={"outline"}>
						Post
					</Button>
				</div>
			</form>
		</div>
	);
};

export default PostForm;
