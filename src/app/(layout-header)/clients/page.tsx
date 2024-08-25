import { Table } from '@chart/charts'
import type { TUser } from '@type/auth'

import { getAllUsers } from '@api/auth-api'

const Clients = async () => {
    const [users, err] = await getAllUsers('key=role&value=user')

    if (err) return null

    const columns = [
        { id: 'name', label: 'Name' },
        { id: 'email', label: 'Email', align: 'right' },
        { id: 'phone', label: 'Phone', align: 'right' },
        { id: 'created-at', label: 'Created At', align: 'right' },
        { id: 'actions', label: 'Actions', align: 'right' },
    ]

    const data: (TUser & { name: string })[] = users.map(user => {
        return { ...user, name: `${user.firstName} ${user.lastName}` }
    })

    return (
        <div>
            <Table columns={columns} rows={data} />
        </div>
    )
}

export default Clients
