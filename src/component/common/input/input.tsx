import type { FC } from 'react'
import type { OutlinedInputProps } from '@mui/material'

import { useState } from 'react'
import { IconButton, InputAdornment, OutlinedInput } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

export const PasswordInput: FC<OutlinedInputProps> = ({ size, name, label, required }) => {
    const [showPassword, setShowPassword] = useState(false)

    const handleClickShowPassword = () => setShowPassword(show => !show)

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
    }

    return (
        <OutlinedInput
            name={name}
            type={showPassword ? 'text' : 'password'}
            label={label}
            required={required}
            size={size}
            endAdornment={
                <InputAdornment position='end'>
                    <IconButton
                        aria-label='toggle password visibility'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge='end'
                    >
                        {showPassword ? <VisibilityOff fontSize={size} /> : <Visibility fontSize={size} />}
                    </IconButton>
                </InputAdornment>
            }
        />
    )
}
