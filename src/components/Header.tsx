import {Button} from "@/components/ui/button";
import Link from "next/link";

export function Header() {
    return (
        <>
            <div className={"flex justify-between items-center"}>
                <h1 className="text-xl font-bold">Baku, Azerbaijan</h1>

                <nav
                    className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Link
                        href="#"
                        className="flex items-center gap-2 text-lg font-semibold md:text-base"
                    >
                        <span className="sr-only">Acme Inc</span>
                    </Link>
                    <Link
                        href="#"
                        className="text-foreground transition-colors hover:text-foreground"
                    >
                        Dashboard
                    </Link>
                    <Link
                        href="#"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Orders
                    </Link>
                    <Link
                        href="#"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Products
                    </Link>
                    <Link
                        href="#"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Customers
                    </Link>
                    <Link
                        href="#"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Analytics
                    </Link>
                </nav>

                <div className={'flex space-x-4'}>
                    <Button variant="outline">Login</Button>
                    <Button variant="default">Register</Button>
                </div>
            </div>
        </>
    );
}
