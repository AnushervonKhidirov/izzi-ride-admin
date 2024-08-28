import type { FC } from 'react'

import styles from './profile-fields.module.css'

type TProfileField = {
    title: string
    value: string
}

export const ProfileField: FC<TProfileField> = ({ title, value }) => {
    return (
        <div className={styles.profile_field}>
            <div className={styles.title}>{title}:</div>
            <div className={styles.value}>{value}</div>
        </div>
    )
}
