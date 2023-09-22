import { Posts } from "@/components/Posts";
import { SearchBar } from "@/components/SearchBar";

export default function Home() {
	return (
		<main className="p-4">
			{/* Search Entity */}
			<SearchBar />
			{/* Fetch Entity */}
			<Posts />
		</main>
	);
}
