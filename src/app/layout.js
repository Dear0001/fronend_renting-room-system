
import "./globals.css";
import { getServerSession } from "next-auth";
import Provider from "@/app/(auth)/api/auth/client-provider";
import NavbarRent from "@/components/NavbarRent";
import {authOptions} from "@/app/(auth)/api/auth/[...nextauth]/route";

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

