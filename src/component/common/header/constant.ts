import { TNavigationData } from '@type/navigation'

import { DASHBOARD_PAGE, MONITORING_PAGE } from '@constant/links'

export const navigation: TNavigationData[] = [
    {
        href: DASHBOARD_PAGE,
        title: 'Dashboard',
    },
    {
        href: MONITORING_PAGE,
        title: 'Monitoring',
    },
]
