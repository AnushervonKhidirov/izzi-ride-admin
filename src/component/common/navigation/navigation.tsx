'use client'
import type { FC } from 'react'
import type { TNavigationData } from '@type/navigation'

import { usePathname } from 'next/navigation'

import { List, ListItemButton } from '@mui/material'

import classNames from 'classnames'

import styles from './navigation.module.css'

type TNavigation = {
    data: TNavigationData[]
    routes: string[]
    className?: string
}

const Navigation: FC<TNavigation> = ({ data, routes, className }) => {
    const pathname = usePathname()

    return (
        <List sx={{ padding: 0 }} className={classNames(styles.navigation, className)}>
            {data.map(
                ({ href, title }) =>
                    routes.indexOf(href) !== -1 && (
                        <ListItemButton 
                            LinkComponent={'a'}
                            key={`header-nav-${title}`}
                            href={href}
                            sx={{ borderRadius: '0.25em' }}
                            className={classNames(styles.navigation_item, { [styles.active]: pathname === href })}
                        >
                            {title}
                        </ListItemButton>
                    ),
            )}
        </List>
    )
}

export default Navigation
