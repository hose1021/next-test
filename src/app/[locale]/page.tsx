import { getStaticParams } from "@/locales/server";
import { setStaticParamsLocale } from "next-international/server";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
	return getStaticParams();
}

export default function Page({
	params: { locale },
}: {
	params: { locale: string };
}) {
	setStaticParamsLocale(locale);

	return (
		<div className="flex justify-between items-center">
			<h1 className="text-2xl font-bold">Baku, Azerbaijan</h1>
			<Button variant="outline">Success</Button>
		</div>
	);
}
