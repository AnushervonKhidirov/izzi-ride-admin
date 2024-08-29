'use client'
import type { FC } from 'react'
import type { TProfileField } from '@type/profile'

import { useState, useRef } from 'react'

import styles from './profile-fields.module.css'
import { Input } from '@mui/material'

const ProfileField: FC<TProfileField> = ({ title, value, editing, editable = true }) => {
    const [fieldValue, setFieldValue] = useState(value)

    return (
        <div className={styles.profile_field}>
            <div className={styles.title}>{title}:</div>

            {editable ? (
                <Input
                    className={styles.value}
                    name={title.toLowerCase()}
                    value={fieldValue}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFieldValue(event.target.value)}
                    readOnly={!editing}
                    disableUnderline={!editing}
                    style={{
                        fontSize: '1em',
                    }}
                    sx={{ '& > input': { padding: 0 } }}
                />
            ) : (
                <div className={styles.value}>{value}</div>
            )}
        </div>
    )
}

export default ProfileField
