import type { TUser } from '@type/auth'

import { headers } from 'next/headers'

import FullName from '@component/profile/full-name-field/full-name-field'
import Information from '@component/profile/information/information'

import { USER_HEADER } from '@constant/headers'

const Profile = () => {
    const userJson = headers().get(USER_HEADER)
    const user = userJson ? (JSON.parse(userJson) as TUser) : null

    return (
        user && (
            <>
                <FullName firstName={user.firstName} lastName={user.lastName} />
                <Information user={user} />
            </>
        )
    )
}

export default Profile
