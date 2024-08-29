'use client'
import type { FC, MouseEvent } from 'react'
import type { TProfileFieldsWrapper } from '@type/profile'

import { IconButton, Tooltip } from '@mui/material'
import { Edit, Save } from '@mui/icons-material'

import { COLORS } from '@constant/colors'
import styles from './profile-fields-wrapper.module.css'

const ProfileFieldsWrapper: FC<TProfileFieldsWrapper> = ({ name, children, editing, setEditing }) => {
    return (
        <div className={styles.profile_fields_wrapper}>
            <div className={styles.fields_wrapper_name}>
                <div>{name}</div>

                {editing ? (
                    <Tooltip title={`Save ${name}`}>
                        <IconButton
                            aria-label={`Save ${name}`}
                            onClick={() => setEditing(false)}
                            onMouseDown={(event: MouseEvent<HTMLButtonElement>) => {
                                event.preventDefault()
                            }}
                            edge="end"
                            style={{ fontSize: '1.5em' }}
                            size="small"
                        >
                            <Save style={{ fontSize: '0.5em', fill: COLORS.primary }} />
                        </IconButton>
                    </Tooltip>
                ) : (
                    <Tooltip title={`Edit ${name}`}>
                        <IconButton
                            aria-label={`Edit ${name}`}
                            onClick={() => setEditing(true)}
                            onMouseDown={(event: MouseEvent<HTMLButtonElement>) => {
                                event.preventDefault()
                            }}
                            edge="end"
                            style={{ fontSize: '1.5em' }}
                            size="small"
                        >
                            <Edit style={{ fontSize: '0.5em' }} />
                        </IconButton>
                    </Tooltip>
                )}
            </div>

            <div className={styles.fields_list}>{children}</div>
        </div>
    )
}

export default ProfileFieldsWrapper
