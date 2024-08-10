import type { FC, ReactNode } from 'react'
import type { TRole } from '@type/user'

import { redirect } from 'next/navigation'

type TProtected = {
    isAuthorized: boolean
    roles: TRole[]
    children: ReactNode
}

const Protected: FC<TProtected> = ({ isAuthorized, roles, children }) => {
    return <>{children}</>
}
