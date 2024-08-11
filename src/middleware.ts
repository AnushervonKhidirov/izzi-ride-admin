import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { SIGN_IN_PAGE } from '@constant/links'

export function middleware(request: NextRequest) {
    const userName = request.cookies.get('userName')
    const role = request.cookies.get('role')

    if (!userName || !role) {
        return NextResponse.redirect(new URL(SIGN_IN_PAGE, request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/', '/monitoring', '/profile'],
}
