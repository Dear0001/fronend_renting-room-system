import { getServerSession } from "next-auth";
import { authOptions as nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";

export const getToken = async () => {
    const session = await getServerSession(nextAuthOptions);
    console.log("getToken: Session:", session);
    console.log("getToken: Token:", session?.user?.token);
    const token = session?.user?.token;
    return {
        authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
    };
};