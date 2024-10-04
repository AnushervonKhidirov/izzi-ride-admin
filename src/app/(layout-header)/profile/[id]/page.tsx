import type { TUser } from '@type/auth'

import { headers } from 'next/headers'

import FullName from '@component/profile/full-name-field/full-name-field'
import Information from '@component/profile/information/information'

import { PROFILE_HEADER } from '@constant/headers'

const Profile = () => {
    const otherProfileHeader = headers().get(PROFILE_HEADER)
    const user = otherProfileHeader ? (JSON.parse(otherProfileHeader) as TUser) : null

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
