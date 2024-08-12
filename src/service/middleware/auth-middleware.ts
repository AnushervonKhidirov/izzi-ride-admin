import type { NextMiddleware } from 'next/server'

export function authMiddleware(nextMiddleware: NextMiddleware): NextMiddleware {
    return async (request, event) => {
                
        return nextMiddleware(request, event)        
    }
}
