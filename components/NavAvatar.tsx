"use client";
import { signIn, signOut } from "next-auth/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "./ui/button";

export const NavAvatar = async ({ session }: any) => {
	if (session) {
		return (
			<DropdownMenu>
				<DropdownMenuTrigger>
					<Avatar>
						<AvatarImage
							src={session?.user?.image || "https://placehold.co"}
							alt={session?.user?.name || "default"}
						/>
						<AvatarFallback>{session?.user?.name || "default"}</AvatarFallback>
					</Avatar>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					<DropdownMenuItem
						className="uppercase text-red-500 cursor-pointer"
						onClick={() => signOut()}>
						Sign Out
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		);
	}

	return (
		<Button
			className="uppercase"
			onClick={() => signIn()}>
			Sign In
		</Button>
	);
};
