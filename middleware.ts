import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

interface RequestCookies {
  authenticated?: string;
}
 
export function middleware(request: NextRequest) {
  const cookies = request.cookies as RequestCookies
  
  if (!cookies.authenticated) {
    console.log("first")
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}
 
export const config = {
  matcher: ['/doctors'],
}