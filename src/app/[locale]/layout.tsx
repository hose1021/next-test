import type {ReactNode} from "react";
import {Provider} from "./provider";

export default function Layout({
	params: { locale },
	children,
}: {
	params: { locale: string };
	children: ReactNode;
}) {
	return (
		<Provider locale={locale}>
			<main className="container mx-auto p-4">
				{children}
			</main>
		</Provider>
	);
}
