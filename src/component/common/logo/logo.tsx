import Link from 'next/link'
import Image from 'next/image'

import { DASHBOARD_PAGE } from '@constant/links'

import logo from '@images/logo.png'
import styles from './logo.module.css'

const Logo = () => {
    return (
        <Link id='logo' href={DASHBOARD_PAGE} className={styles.logo}>
            <Image src={logo} alt='Logo' />
        </Link>
    )
}

export default Logo
