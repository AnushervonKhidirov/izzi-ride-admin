import type { TextFieldProps } from '@mui/material'

export const signInInputs: TextFieldProps[] = [
    {
        name: 'email',
        type: 'email',
        label: 'Login',
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
        name: 'name',
        type: 'text',
        label: 'First name',
        required: true,
    },
    {
        name: 'surname',
        type: 'text',
        label: 'Last name',
    },
]
