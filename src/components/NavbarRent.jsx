import { getServerSession } from "next-auth";
import ClientNavbarRent from "./ClientNavbarRent";
import {authOptions} from "@/app/(auth)/api/auth/[...nextauth]/route";

const NavbarRent = async () => {
    const session = await getServerSession(authOptions);

    return <ClientNavbarRent session={session} />;
};

export default NavbarRent;
