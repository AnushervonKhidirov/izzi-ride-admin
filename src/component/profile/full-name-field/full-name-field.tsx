'use client'
import type { FC, MouseEvent } from 'react'

import { useRef, useState } from 'react'

import { Input, InputAdornment, IconButton } from '@mui/material'
import { Edit, Save } from '@mui/icons-material'
import { COLORS } from '@constant/colors'

type TFullName = {
    firstName: string
    lastName: string
}

export const FullName: FC<TFullName> = ({ firstName, lastName }) => {
    const [fullName, setFullName] = useState(`${firstName} ${lastName}`)
    const [editable, setEditable] = useState(false)
    const [saved, setSaved] = useState(false)
    const inputRef = useRef<HTMLDivElement>(null)

    function editUserName() {
        fucusOnInput()
        setEditable(true)
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
        setEditable(false)
    }

    return (
        <Input
            value={fullName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFullName(event.target.value)}
            ref={inputRef}
            readOnly={!editable}
            disableUnderline
            onBlur={blurHandler}
            style={{ color: COLORS.secondary, fontSize: '2.5em', fontWeight: 700, gridArea: 'full_name' }}
            sx={{ '& > input': { padding: 0 } }}
            endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        aria-label="edit full name"
                        onMouseDown={(event: MouseEvent<HTMLButtonElement>) => {
                            event.preventDefault()
                        }}
                        edge="end"
                        style={{ fontSize: '1.5em' }}
                        size="small"
                    >
                        {editable ? (
                            <Save style={{ fontSize: '0.5em', fill: COLORS.primary }} onClick={saveUserName} />
                        ) : (
                            <Edit style={{ fontSize: '0.5em' }} onClick={editUserName} />
                        )}
                    </IconButton>
                </InputAdornment>
            }
        />
    )
}
