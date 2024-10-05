import type { FC, ReactNode } from 'react'
import type { TUserTable } from '@type/chart'
import type { TUser } from '@type/auth'

import { Table } from '@chart/charts'
import { LinkButton } from '@common/button/button'

import { PROFILE_PAGE } from '@constant/links'

const UserTable: FC<TUserTable> = ({ users }) => {
    const columns = [
        { id: 'name', label: 'Name' },
        { id: 'email', label: 'Email', align: 'right' },
        { id: 'phone', label: 'Phone', align: 'right' },
        { id: 'created-at', label: 'Created At', align: 'right' },
        { id: 'link', label: 'Actions', align: 'right' },
    ]

    const data: (TUser & { name: string; link: ReactNode })[] = users.map(user => {
        return {
            ...user,
            name: `${user.firstName} ${user.lastName}`,
            link: (
                <LinkButton
                    title={`Edit ${user.firstName}'s profile`}
                    href={`${PROFILE_PAGE}/${user.id}`}
                    target="_blank"
                    tooltipPlacement="left"
                >
                    Edit
                </LinkButton>
            ),
        }
    })

    return <Table columns={columns} rows={data} />
}

export default UserTable
