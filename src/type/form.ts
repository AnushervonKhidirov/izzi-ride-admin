import type { FormEvent, ReactNode } from 'react'
import type { TextFieldProps } from '@mui/material'

export type TForm = {
    inputs: TextFieldProps[]
    buttonText?: string
    className?: string
    children?: ReactNode
    submitFunc: (event: FormEvent<HTMLFormElement>) => void
}
