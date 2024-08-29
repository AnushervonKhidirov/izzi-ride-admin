'use client'
import type { FC } from 'react'

import { useState } from 'react'

import ProfileFieldsWrapper from '../profile-fields-wrapper/profile-fields-wrapper'
import ProfileField from '../profile-fields/profile-fields'
import { TUser } from '@type/auth'

const Information: FC<{ user: TUser }> = ({ user }) => {
    const [editing, setEditing] = useState(false)

    return (
        <ProfileFieldsWrapper name="Information" editing={editing} setEditing={setEditing}>
            <ProfileField title="ID" value={user.id} editable={false} />
            <ProfileField title="Role" value={user.role} editable={false} />
            <ProfileField title="Email" value={user.email} editing={editing} />
            <ProfileField title="Phone" value={user.phone} editing={editing} />
        </ProfileFieldsWrapper>
    )
}

export default Information
