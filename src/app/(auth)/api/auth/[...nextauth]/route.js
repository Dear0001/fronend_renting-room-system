import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { loginService } from "@/service/authService"

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        //lohin by email and password
        CredentialsProvider({
            async authorize(userInfo){

                const newUserInfo = {
                    email : userInfo.email,
                    password : userInfo.password,
                };
                const login = await loginService(newUserInfo);
                console.log("Login Data :",login)
                return login;
            },

        }),
    ],
    //used to set token into cookies
    callbacks:{
        async jwt({ token, user}){
            return{...token, ...user};
        },
        async session({session, token}){
            session.user = token;
            return session;
        },
        pages: {
            signIn: "/login",
        },

    },
    secret: process.env.NEXTAUTH_SECRET,
    pages : {
        signIn : '/login'
    }

};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
