import { NextResponse } from 'next/server';
import { routes } from './helpers/routes';
import { getUserInfo } from './helpers/auth';

export async function middleware(request) {
  try {
    if (!request.nextUrl.pathname.startsWith('/login')) {
      const cookie = request.cookies.get("auth");
      const payload = await getUserInfo(cookie.value);
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