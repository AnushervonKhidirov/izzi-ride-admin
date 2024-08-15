import Navigation from '@common/navigation/navigation'
import ProfileButton from '@common/profile-btn/profile-btn'

import { navigation } from './constant'
import styles from './header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <ProfileButton />
            <Navigation data={navigation} />
        </header>
    )
}

export default Header
