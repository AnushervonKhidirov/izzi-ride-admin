import type { NextMiddleware } from 'next/server'

import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'

import { getUserWithRefresh } from '@api/auth-api'
import { USER_HEADER } from '@constant/headers'
import { LOG_IN_PAGE } from '@constant/links'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@constant/auth'

export function authMiddleware(nextMiddleware: NextMiddleware): NextMiddleware {
    return async (request, event) => {
        const cookieStore = cookies()

        const accessToken = cookieStore.get(ACCESS_TOKEN)?.value
        const refreshToken = cookieStore.get(REFRESH_TOKEN)?.value

        if (accessToken && refreshToken) {
            const [user, err] = await getUserWithRefresh({
                accessToken: accessToken,
                refreshToken: refreshToken,
            })

            if (err) return NextResponse.redirect(new URL(LOG_IN_PAGE, request.url))

            request.headers.set(USER_HEADER, JSON.stringify(user))
        }

        return nextMiddleware(request, event)
    }
}
