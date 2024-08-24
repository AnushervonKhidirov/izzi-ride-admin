import type { NextMiddleware } from 'next/server'
import type { TUser } from '@type/auth'

import { NextResponse } from 'next/server'

import { SIGN_IN_PAGE, JOIN_PAGE } from '@constant/links'
import { USER_ACCESSED_PAGES } from '@constant/auth'
import { USER_HEADER } from '@constant/headers'

export function protectedRoute(middleware: NextMiddleware): NextMiddleware {
    return async (request, event) => {
        const pathname = request.nextUrl.pathname
        const userJson = request.headers.get(USER_HEADER)

        const unAuthPage = pathname === SIGN_IN_PAGE || pathname === JOIN_PAGE
        const rootPage = pathname === '/'
        const user = userJson ? (JSON.parse(userJson) as TUser) : null

        if (!unAuthPage && !user) {
            return NextResponse.redirect(new URL(SIGN_IN_PAGE, request.url))
        }

        if (user) {
            const accessedPages = USER_ACCESSED_PAGES[user.role]

            if (accessedPages.indexOf(pathname) === -1) {
                return NextResponse.redirect(new URL(accessedPages[0], request.url))
            }
        }

        return middleware(request, event)
    }
}
