import type { NextMiddleware } from 'next/server'

import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

import { getUserWithRefresh } from '@api/auth-api'
import { USER_HEADER } from '@constant/header'
import { SIGN_IN_PAGE } from '@constant/links'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@constant/auth'

export function authMiddleware(nextMiddleware: NextMiddleware): NextMiddleware {
    return async (request, event) => {
        const headers = new Headers(request.headers)
        const cookieStore = cookies()
        const accessToken = cookieStore.get(ACCESS_TOKEN)?.value
        const refreshToken = cookieStore.get(REFRESH_TOKEN)?.value

        // TODO: skip on sign in and join pages!

        if (accessToken && refreshToken) {
            const [user, err] = await getUserWithRefresh({
                access_token: accessToken,
                refresh_token: refreshToken,
            })

            if (err) return NextResponse.redirect(new URL(SIGN_IN_PAGE, request.nextUrl))

            headers.set(USER_HEADER, JSON.stringify(user))

            return NextResponse.next({
                request: { headers },
            })
        }

        return nextMiddleware(request, event)
    }
}
