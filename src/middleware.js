import { jwtVerify } from 'jose';
import { NextResponse } from 'next/server';
import { routes } from './helpers/routes';

// This function can be marked `async` if using `await` inside
export async function middleware(request) {
  try {
    if (!request.nextUrl.pathname.startsWith('/login')) {
      const cookie = request.cookies.get("auth");
      const { payload } = await jwtVerify(cookie.value, new TextEncoder().encode(process.env.jwtSecret));
      
      return NextResponse.next();

    }
  } catch (error) {
    console.error(error);
    return NextResponse.redirect(new URL(routes.login.signIn, request.url))
  }



}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|fonts).*)',
  ],
}