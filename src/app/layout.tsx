import "@/styles/global.css";
import type { Metadata } from "next";
import type { ReactElement } from "react";
import { Noto_Sans } from "next/font/google";
import { cn } from "@/utils";

export const metadata: Metadata = {
	metadataBase: new URL("https://midday.ai"),
	title: "Midday | Run your business smarter",
	description:
		"Midday provides you with greater insight into your business and automates the boring tasks, allowing you to focus on what you love to do instead.",
};

const notoSans = Noto_Sans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)" },
		{ media: "(prefers-color-scheme: dark)" },
	],
};

export default function Layout({
	children,
	params: { locale = "en" },
}: {
	children: ReactElement;
	params: { locale: string };
}) {
	return (
		<html lang={locale} suppressHydrationWarning>
			<body
				className={cn(
					`${notoSans.className}`,
					"bg-[linear-gradient(182deg,rgb(19,66,154),rgb(1,41,108))] relative flex min-h-screen flex-col",
				)}
			>
				{children}
			</body>
		</html>
	);
}
