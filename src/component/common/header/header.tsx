import type { TUser } from '@type/auth'

import { headers } from 'next/headers'

import Navigation from '@common/navigation/navigation'
import ProfileButton from '@common/profile-btn/profile-btn'

import { USER_ACCESSED_PAGES } from '@constant/auth'
import { USER_HEADER } from '@constant/headers'
import { navigation } from './constant'
import styles from './header.module.css'

const Header = () => {
    const userHeader = headers().get(USER_HEADER)
    const user = userHeader ? (JSON.parse(userHeader) as TUser) : null

    return (
        user && (
            <header className={styles.header}>
                <ProfileButton { ...user } />
                <Navigation data={navigation} visibleRoutes={USER_ACCESSED_PAGES[user.role]} />
            </header>
        )
    )
}

export default Header
