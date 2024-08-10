import type { FC } from 'react'
import type { TRole } from '@type/user'

import Link from 'next/link'
import { ProfileIcon } from '@assets/icons'

import { PROFILE_PAGE } from '@constant/links'
import styles from './profile-btn.module.css'

type TProfileButton = {
    name: string
    role: TRole
}

const ProfileButton: FC<TProfileButton> = ({ name, role }) => {
    return (
        <Link href={PROFILE_PAGE} title='Profile' className={styles.profile_btn}>
            <ProfileIcon className={styles.profile_icon} />
            <div className={styles.user_name}>{name}</div>
            <div className={styles.user_role}>{role}</div>
        </Link>
    )
}

export default ProfileButton
