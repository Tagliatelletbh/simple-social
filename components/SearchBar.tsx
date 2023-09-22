"use client";
import useSearch from "@/hooks/search-hook";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export const SearchBar = () => {
	const router = useRouter();
	const { search, setSearch } = useSearch();

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		router.push(`/?search=${search}`);
	};

	return (
		<div className="flex justify-center mt-16">
			<form
				className="flex space-x-2"
				onSubmit={handleSubmit}>
				<Input
					placeholder="Search..."
					value={search}
					onChange={handleSearchChange}
				/>
				<Button
					variant={"outline"}
					type="submit">
					Search
				</Button>
			</form>
		</div>
	);
};
