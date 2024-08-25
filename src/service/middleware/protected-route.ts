import type { NextMiddleware } from 'next/server'
import type { TUser } from '@type/auth'

import { NextResponse } from 'next/server'

import { LOG_IN_PAGE, JOIN_PAGE } from '@constant/links'
import { USER_ACCESSED_PAGES } from '@constant/auth'
import { USER_HEADER } from '@constant/headers'
import { isPageWithId, pageId } from '@constant/regex'

export function protectedRouteMiddleware(middleware: NextMiddleware): NextMiddleware {
    return async (request, event) => {
        const pathname = request.nextUrl.pathname
        const userJson = request.headers.get(USER_HEADER)

        const unAuthPage = pathname === LOG_IN_PAGE || pathname === JOIN_PAGE
        const user = userJson ? (JSON.parse(userJson) as TUser) : null

        if (!unAuthPage && !user) {
            return NextResponse.redirect(new URL(LOG_IN_PAGE, request.url))
        }

        if (user) {
            const accessedPages = USER_ACCESSED_PAGES[user.role]
            const updatedPathName = isPageWithId.test(pathname) ? pathname.replace(pageId, '/[id]') : pathname

            if (accessedPages.indexOf(updatedPathName) === -1) {
                return NextResponse.redirect(new URL(accessedPages[0], request.url))
            }
        }

        return middleware(request, event)
    }
}
