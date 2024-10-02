import type { FC } from 'react'
import type { TUser } from '@type/auth'

import Link from 'next/link'
import { AccountCircle } from '@mui/icons-material'

import { PROFILE_PAGE } from '@constant/links'
import { COLORS } from '@constant/colors'
import styles from './profile-btn.module.css'

const ProfileButton: FC<TUser> = ({ firstName, lastName, role }) => {
    return (
        <Link href={PROFILE_PAGE} title="Profile" className={styles.profile_btn}>
            <AccountCircle
                className={styles.profile_icon}
                style={{ width: '100%', height: '100%', fill: COLORS.secondary }}
            />
            <div className={styles.user_name}>
                {firstName} {lastName}
            </div>
            <div className={styles.user_role}>{role}</div>
        </Link>
    )
}

export default ProfileButton
