import type { FC } from 'react'
import { ReactNode } from 'react'

import classNames from 'classnames'

import styles from './card.module.css'

type TCard = {
    children: ReactNode
    className?: string
}

const Card: FC<TCard> = ({ children, className }) => {
    return <div className={classNames(styles.card, className && className)}>{children}</div>
}

export default Card
