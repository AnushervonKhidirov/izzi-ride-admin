'use client'
import type { FC } from 'react'
import type { TNavigationData } from '@type/navigation'

import { usePathname } from 'next/navigation'

import Link from 'next/link'
import classNames from 'classnames'

import styles from './navigation.module.css'

type TNavigation = {
    data: TNavigationData[]
    visibleRoutes: string[]
    className?: string
}

const Navigation: FC<TNavigation> = ({ data, visibleRoutes, className }) => {
    const pathname = usePathname()

    return (
        <nav className={classNames(styles.navigation, className)}>
            {data.map(
                ({ href, title }) =>
                    visibleRoutes.indexOf(href) !== -1 && (
                        <Link
                            href={href}
                            title={title}
                            key={`header-nav-${title}`}
                            className={classNames(styles.navigation_item, { [styles.active]: pathname === href })}
                        >
                            {title}
                        </Link>
                    ),
            )}
        </nav>
    )
}

export default Navigation
