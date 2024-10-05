import type { TUser } from '@type/auth'

import { headers } from 'next/headers'

import Navigation from '@common/navigation/navigation'
import ProfileButton from '@common/profile-btn/profile-btn'

import { USER_ACCESSED_PAGES } from '@constant/auth'
import { USER_HEADER } from '@constant/headers'
import { navigation } from './constant'
import styles from './header.module.css'

import HamburgerMenu from '@common/hamburger-menu/hamburger-menu'

const Header = () => {
    const userHeader = headers().get(USER_HEADER)
    const user = userHeader ? (JSON.parse(userHeader) as TUser) : null

    return (
        user && (
            <header className={styles.header}>
                <ProfileButton { ...user } />
                <Navigation className={styles.navigation} data={navigation} routes={USER_ACCESSED_PAGES[user.role]} />
                {/* <HamburgerMenu className={styles.hamburger_menu} /> */}
            </header>
        )
    )
}

export default Header
