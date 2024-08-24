import type { TextFieldProps } from '@mui/material'

export const logInInputs: TextFieldProps[] = [
    {
        name: 'username',
        type: 'text',
        label: 'login',
        required: true,
    },
    {
        name: 'password',
        type: 'password',
        label: 'Password',
        required: true,
    },
]

export const joinInputs: TextFieldProps[] = [
    {
        name: 'first_name',
        type: 'text',
        label: 'First name',
        required: true,
    },
    {
        name: 'last_name',
        type: 'text',
        label: 'Last name',
    },
]
