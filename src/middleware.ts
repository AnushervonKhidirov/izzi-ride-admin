import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { LOGIN_PAGE } from '@constant/links'

export function middleware(request: NextRequest) {
    const userName = request.cookies.get('userName')
    const role = request.cookies.get('role')

    if (userName || !role) {
        return NextResponse.redirect(new URL(LOGIN_PAGE, request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/', '/monitoring', '/profile'],
}
