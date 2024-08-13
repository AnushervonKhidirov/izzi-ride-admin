import type { ReactNode } from 'react'
import type { TextFieldProps } from '@mui/material'

export type TForm = {
    endpoint: string
    inputs: TextFieldProps[]
    buttonText?: string
    className?: string
    children?: ReactNode
}
