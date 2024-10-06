import type { FC, PropsWithChildren } from 'react'

import { Card as MuiCard } from '@mui/material'

type TCard = PropsWithChildren & {
    className?: string
}

const Card: FC<TCard> = ({ children, className }) => {
    return (
        <MuiCard className={className} sx={{ padding: '1em', backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
            {children}
        </MuiCard>
    )
}

export default Card
