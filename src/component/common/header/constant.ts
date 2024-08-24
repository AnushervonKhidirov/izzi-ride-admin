import { TNavigationData } from '@type/navigation'

import {
    ADMINS_PAGE,
    CLIENTS_PAGE,
    TRIP_PAGE,
    APP_MANAGEMENT_PAGE,
    APP_VERSION_PAGE,
    SUPPORT_PAGE,
} from '@constant/links'

export const navigation: TNavigationData[] = [
    {
        href: ADMINS_PAGE,
        title: 'Admins',
    },
    {
        href: CLIENTS_PAGE,
        title: 'Clients',
    },
    {
        href: TRIP_PAGE,
        title: 'Trip',
    },
    {
        href: APP_MANAGEMENT_PAGE,
        title: 'App management',
    },
    {
        href: APP_VERSION_PAGE,
        title: 'App version',
    },
    {
        href: SUPPORT_PAGE,
        title: 'Support',
    },
]
