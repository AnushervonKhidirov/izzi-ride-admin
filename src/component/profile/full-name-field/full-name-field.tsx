'use client'
import type { FC, MouseEvent } from 'react'
import type { TFullName } from '@type/profile'

import { useRef, useState } from 'react'

import { Input, InputAdornment, Tooltip, IconButton } from '@mui/material'
import { Edit, Save } from '@mui/icons-material'
import { COLORS } from '@constant/colors'

const FullName: FC<TFullName> = ({ firstName, lastName }) => {
    const [fullName, setFullName] = useState(`${firstName} ${lastName}`)
    const [editing, setEditing] = useState(false)
    const [saved, setSaved] = useState(false)
    const inputRef = useRef<HTMLDivElement>(null)

    function editUserName() {
        fucusOnInput()
        setEditing(true)
    }

    function saveUserName() {
        setSaved(true)
    }

    function fucusOnInput() {
        if (inputRef.current) {
            const input = inputRef.current.querySelector('input')
            input?.focus()
        }
    }

    function blurHandler() {
        if (!saved) setFullName(`${firstName} ${lastName}`)
        setEditing(false)
    }

    return (
        <Input
            value={fullName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFullName(event.target.value)}
            ref={inputRef}
            readOnly={!editing}
            disableUnderline={!editing}
            onBlur={blurHandler}
            style={{
                color: COLORS.secondary,
                fontSize: '2.5em',
                fontWeight: 700,
                fontFamily: 'inherit',
                gridArea: 'full_name',
                justifySelf: 'start',
            }}
            sx={{ '& > input': { padding: 0 } }}
            endAdornment={
                <InputAdornment position="end">
                    {editing ? (
                        <Tooltip title="Save full name">
                            <IconButton
                                aria-label="Save full name"
                                onClick={saveUserName}
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
                        <Tooltip title="Edit full name">
                            <IconButton
                                aria-label="Edit full name"
                                onClick={editUserName}
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
                </InputAdornment>
            }
        />
    )
}

export default FullName
