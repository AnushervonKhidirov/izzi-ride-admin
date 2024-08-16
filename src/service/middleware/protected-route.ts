import type { NextMiddleware } from 'next/server'

import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

import { ACCESS_TOKEN, REFRESH_TOKEN } from '@constant/auth'
import { SIGN_IN_PAGE, JOIN_PAGE, DASHBOARD_PAGE } from '@constant/links'

export function protectedRoute(middleware: NextMiddleware): NextMiddleware {
    return async (request, event) => {
        const pathname = request.nextUrl.pathname
        const cookieStore = cookies()

        const unAuthPage = pathname === SIGN_IN_PAGE || pathname === JOIN_PAGE
        const accessToken = cookieStore.get(ACCESS_TOKEN)?.value
        const refreshToken = cookieStore.get(REFRESH_TOKEN)?.value

        if (!unAuthPage && (!accessToken || !refreshToken)) {
            return NextResponse.redirect(new URL(SIGN_IN_PAGE, request.nextUrl))
        }

        if (unAuthPage && accessToken && refreshToken) {
            // TODO: redirect back to previous page
            return NextResponse.redirect(new URL(DASHBOARD_PAGE, request.nextUrl))
        }

        return middleware(request, event)
    }
}
