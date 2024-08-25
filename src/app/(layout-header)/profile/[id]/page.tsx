import type { TUser } from '@type/auth'

import { headers } from 'next/headers'

import { PROFILE_HEADER } from '@constant/headers'

const Profile = () => {
    const otherProfileHeader = headers().get(PROFILE_HEADER)
    const profileData = otherProfileHeader ? (JSON.parse(otherProfileHeader) as TUser) : null

    return profileData && <div>{profileData.firstName} {profileData.lastName}'s profile</div>
}

export default Profile
