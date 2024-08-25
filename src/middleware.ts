import { middlewareChain } from '@middleware/chain'
import { authMiddleware } from '@middleware/auth'
import { profilesMiddleware } from '@middleware/profiles'
import { protectedRouteMiddleware } from '@middleware/protected-route'

export default middlewareChain([authMiddleware, profilesMiddleware, protectedRouteMiddleware])

export const config = {
    matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}
