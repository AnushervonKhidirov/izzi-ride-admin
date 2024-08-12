import type { NextMiddleware } from 'next/server'

import { NextResponse } from 'next/server'

type TMiddlewareFactory = (nextMiddleware: NextMiddleware) => NextMiddleware

export function middlewareChain(middlewares: TMiddlewareFactory[], index = 0): NextMiddleware {
    const curMiddleware = middlewares[index]

    if (curMiddleware) {
        const nextMiddleware = middlewareChain(middlewares, index + 1)

        return curMiddleware(nextMiddleware)
    }

    return () => NextResponse.next()
}
