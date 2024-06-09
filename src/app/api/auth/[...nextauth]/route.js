import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FreshbooksProvider from "next-auth/providers/freshbooks";

export const authOptions  = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        FreshbooksProvider({
            clientId: process.env.FRESHBOOKS_CLIENT_ID,
            clientSecret: process.env.FRESHBOOKS_CLIENT_SECRET,
        })
    ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };