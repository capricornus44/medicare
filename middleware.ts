import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies as nextCookies } from 'next/headers'


export function middleware(request: NextRequest) {
  const cookies = nextCookies()
  const accessToken = cookies.get('accessToken')
  
    
  if (!accessToken) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
 
  return NextResponse.next();
}
 
export const config = {
  matcher: ['/', '/doctors', "/services", '/contacts' ],
}