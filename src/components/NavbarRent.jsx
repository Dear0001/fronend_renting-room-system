import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import ClientNavbarRent from "./ClientNavbarRent";

const NavbarRent = async () => {
    const session = await getServerSession(authOptions);

    return <ClientNavbarRent session={session} />;
};

export default NavbarRent;
