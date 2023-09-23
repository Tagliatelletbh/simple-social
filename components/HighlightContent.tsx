import React from "react";

interface HighlightContentProps {
	content: string;
	highlightWord: string | null; // highlightWord can be string or null
}

const HighlightContent: React.FC<HighlightContentProps> = ({
	content,
	highlightWord,
}) => {
	const highlight = (text: string, highlight: string | null) => {
		if (!highlight || highlight.trim() === "") {
			return <span>{text}</span>;
		}

		const parts = text.split(new RegExp(`(${highlight})`, "gi"));
		return parts.map((part, index) =>
			part.toLowerCase() === highlight?.toLowerCase() ? (
				<span
					key={index}
					className="bg-blue-200 text-blue-800">
					{part}
				</span>
			) : (
				part
			)
		);
	};

	return (
		<div>
			<code>{highlight(content, highlightWord)}</code>
		</div>
	);
};

export default HighlightContent;
