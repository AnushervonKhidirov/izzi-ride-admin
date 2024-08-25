import type { ReactNode } from 'react'
import type { TUser } from '@type/auth'

import { Button } from '@mui/material'

import { Table } from '@chart/charts'
import { getAllUsers } from '@api/auth-api'
import { PROFILE_PAGE } from '@constant/links'
import styles from './admin.module.css'

const Admins = async () => {
    const [allUsers, err] = await getAllUsers('key=role&value=admin')

    if (err) return null

    const columns = [
        { id: 'name', label: 'Name' },
        { id: 'email', label: 'Email', align: 'right' },
        { id: 'phone', label: 'Phone', align: 'right' },
        { id: 'created-at', label: 'Created At', align: 'right' },
        { id: 'link', label: 'Actions', align: 'right' },
    ]

    const data: (TUser & { name: string; link: ReactNode })[] = allUsers.map(user => {
        return {
            ...user,
            name: `${user.firstName} ${user.lastName}`,
            link: (
                <Button
                    href={`${PROFILE_PAGE}/${user.id}`}
                    target='_blank'
                    variant='contained'
                    className={styles.edit_btn}
                >
                    Edit
                </Button>
            ),
        }
    })

    return <Table columns={columns} rows={data} />
}

export default Admins
