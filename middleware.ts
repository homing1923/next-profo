// export { locales as middleware } from 'nextra/locales'


import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    return NextResponse.redirect(new URL('/about', request.url))
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/aboutme/:path*',
}