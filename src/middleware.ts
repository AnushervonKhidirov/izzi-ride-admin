import { middlewareChain } from '@middleware/chain'
import { authMiddleware } from '@middleware/auth-middleware'

export default middlewareChain([authMiddleware])

export const config = {
    matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}
