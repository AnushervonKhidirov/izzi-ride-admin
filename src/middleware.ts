import { middlewareChain } from '@middleware/chain'
import { authMiddleware } from '@middleware/auth-middleware'
import { protectedRoute } from '@middleware/protected-route'

export default middlewareChain([authMiddleware, protectedRoute])

export const config = {
    matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}
