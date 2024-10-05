import UserTable from '@hoc/user-table/user-table'

import { getAllUsers } from '@api/auth-api'

const Clients = async () => {
    const [users, err] = await getAllUsers('key=role&value=user')

    // TODO: render an error
    if (err) return null

    return <UserTable users={users} />
}

export default Clients
