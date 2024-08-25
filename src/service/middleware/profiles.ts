import type { NextMiddleware } from 'next/server'

import { isProfilePageWithId, pageId } from '@constant/regex'
import { getSingleUser } from '@api/auth-api'
import { PROFILE_HEADER } from '@constant/headers'

export function profilesMiddleware(middleware: NextMiddleware): NextMiddleware {
    return async (request, event) => {
        const pathname = request.nextUrl.pathname

        if (isProfilePageWithId.test(pathname)) {
            const result = pathname.match(pageId)
            const id = result && result[0]

            if (id) {
                const [otherProfile, err] = await getSingleUser(id)

                if (err) {
                    // TODO: do something )
                    console.log('User not found')
                } else {
                    request.headers.set(PROFILE_HEADER, JSON.stringify(otherProfile))
                }
            }
        }

        return middleware(request, event)
    }
}
