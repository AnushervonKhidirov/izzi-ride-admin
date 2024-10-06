import type { FC } from 'react'

import Card from '@common/card/card'

import dateToText from '@helper/date-to-text'
import styles from './dashboard-item.module.css'

type TDashboardItem = {
    title: string
    amount: number
    updatedAt: string | number
}

const DashboardItem: FC<TDashboardItem> = ({ title, amount, updatedAt }) => {
    return (
        <Card className={styles.dashboard_item}>
            <div className={styles.amount}>{amount}</div>
            <div className={styles.title}>{title}</div>
            <div className={styles.updated_at}>
                Updated: <span>{dateToText(updatedAt)}</span>
            </div>
        </Card>
    )
}

export default DashboardItem
