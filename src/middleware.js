import { NextResponse } from 'next/server';
import { routes } from './helpers/routes';
import { getToken } from "next-auth/jwt"

export async function middleware(req) {
    try {
        /* Si es cualquier otra direccion */
        if (!req.nextUrl.pathname.startsWith('/login')) {
            /* check session*/
            const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
            /* user should be auth */
            if (!session.email) throw new Error("Invalid user")

            return NextResponse.next();
        }
    } catch (error) {
        console.error(error);
        return NextResponse.redirect(new URL(routes.login.signIn, req.url))
    }



}

export const config = {
    matcher: [
        '/dashboard/:path*',
    ],
}