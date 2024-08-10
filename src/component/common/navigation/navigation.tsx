'use client'
import type { FC } from 'react'
import type { TNavigationData } from '@type/navigation'

import { usePathname } from 'next/navigation'

import Link from 'next/link'
import classNames from 'classnames'

import styles from './navigation.module.css'

type TNavigation = {
    data: TNavigationData[]
    className?: string
}

const Navigation: FC<TNavigation> = ({ data, className }) => {
    const pathname = usePathname()

    return (
        <nav className={classNames(styles.navigation, className)}>
            {data.map(({ href, title }) => (
                <Link
                    href={href}
                    title={title}
                    key={`header-nav-${title}`}
                    className={classNames(styles.navigation_item, { [styles.active]: pathname === href })}
                >
                    {title}
                </Link>
            ))}
        </nav>
    )
}

export default Navigation
