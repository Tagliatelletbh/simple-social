import React from "react";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import HighlightContent from "./HighlightContent"; // Import the HighlightContent component

interface PostCardProps {
	name: string;
	title: string;
	content: string;
	searchTerm: string | null; // Add the searchTerm prop
}

const PostCard = ({ name, title, content, searchTerm }: PostCardProps) => {
	return (
		<Card className="mt-6 p-1">
			<CardHeader>
				<CardTitle className="text-lg font-semibold text-center">
					{title}
				</CardTitle>
			</CardHeader>
			<CardContent>
				<HighlightContent
					content={content}
					highlightWord={searchTerm}
				/>
			</CardContent>
			<CardFooter className="p-2">
				<p className="text-xs text-gray-300">{name}</p>
			</CardFooter>
		</Card>
	);
};

export default PostCard;
