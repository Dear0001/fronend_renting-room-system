import { NextResponse } from "next/server";

export default function middleware(request) {
    const token = request.cookies.get("next-auth.session-token")?.value;
    const path = request.nextUrl.pathname;

    if (!token && path !== "/login") {
        return NextResponse.redirect(new URL("/login", request.url));
    }
    if (token && (path === "/auth/login" || path === "/")) {
        return NextResponse.redirect(new URL("/", request.url));
    }

}

export const config = { matcher: ["/renting"] };

// export { default } from "next-auth/middleware";

// export const config = { matcher: ["/","/newfeed","/company","/company/companyId","/dashboard","/history","/postdetail","/setting","/userprofile","/application","/report","/task"] };