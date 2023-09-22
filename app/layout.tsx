import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { ThemeProvider } from "@/providers/theme-provider";
import { Navbar } from "@/components/Navbar";
import { ToastProvider } from "@/providers/toast-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Simple Social - Tagliatelletbh",
	description: "Created using Next.js and Tailwind CSS",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem>
					<ToastProvider />
					<Navbar />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
