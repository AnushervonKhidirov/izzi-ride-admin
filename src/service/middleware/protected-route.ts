import { NextMiddleware } from 'next/server'

export function protectedRoute(middleware: NextMiddleware): NextMiddleware {
    return async (request, event) => {
        return middleware(request, event)
    }
}
