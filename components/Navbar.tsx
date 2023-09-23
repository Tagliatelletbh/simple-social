import Link from "next/link";
import { getServerSession } from "next-auth/next";

import { ModeToggle } from "@/components/ui/ModeToggle";
import { Button } from "@/components/ui/button";
import { NavAvatar } from "@/components/NavAvatar";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export const Navbar = async () => {
	const session = await getServerSession(authOptions);

	return (
		<nav className="p-5 border-b border-gray-200 bg-background">
			<div className="flex flex-row justify-between">
				<div>
					<Link href={"/"}>
						<h1 className="text-xl font-bold uppercase">simple social</h1>
					</Link>
				</div>
				<div className="space-x-5 flex items-center text-center">
					<Link href={"/post"}>
						<Button
							className="text-xl font-bold uppercase"
							variant={"outline"}>
							post
						</Button>
					</Link>
					<ModeToggle />
					<NavAvatar session={session} />
				</div>
			</div>
		</nav>
	);
};
