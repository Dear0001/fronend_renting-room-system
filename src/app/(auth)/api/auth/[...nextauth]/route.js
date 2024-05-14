import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import {loginService} from "@/service/login.service";

export const authOptions = {

    providers: [
        //login by email and password
        CredentialsProvider({
            async authorize(credentials) {
                const { email, password } = credentials;
                const login = await loginService({ email, password });
                if (login?.status === 400) {
                    throw new Error(login);
                }
                return login;
            },
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/login",
    },

    callbacks: {
        async jwt({token, user}) {
            return {...token, ...user};
        },
        async session({session, token}) {
            session.user = token;
            return session;
        },
    },
};

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};
