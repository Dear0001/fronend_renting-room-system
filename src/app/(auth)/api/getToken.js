import {getServerSession} from "next-auth";
import {authOptions} from "@/app/(auth)/api/auth/[...nextauth]/route"

export const getToken = async () => {
    const session = await getServerSession(authOptions);
    return {
        authorization: `Bearer ${session?.user?.token}`,
        "Content-Type": "application/json",
    };
};