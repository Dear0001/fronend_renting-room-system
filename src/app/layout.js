
import "./globals.css";
import { getServerSession } from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import Provider from "@/lib/client-provider";
import NavbarRent from "@/components/NavbarRent";

export const metadata = {
    title: "Next.js",
    description: "Generated by Next.js",
};

export default async function RootLayout({ children }) {
    const session = await getServerSession(authOptions);

    return (
        <html lang="en">
        <body>
        <Provider session={session}>
            <NavbarRent/>
            {children}
        </Provider>
        </body>
        </html>
    );
}

