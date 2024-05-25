import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import NextAuth from "next-auth";
import { loginService } from "@/service/login.service";

export const authOptions = {
    providers: [
        // Login by email and password
        CredentialsProvider({
            async authorize(credentials, req) {
                const { email, password } = credentials;
                try {
                    const login = await loginService({ email, password });
                    if (login?.status === 400) {
                        throw new Error("Invalid email or password");
                    }
                    return login;
                } catch (error) {
                    throw new Error("Login failed");
                }
            },
        }),
        // Login with Google
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                return { ...token, ...user };
            }
            return token;
        },
        async session({ session, token }) {
            session.user = token;
            return session;
        },
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
