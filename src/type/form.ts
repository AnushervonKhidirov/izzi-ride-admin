import type { ReactNode } from 'react'
import type { TextFieldProps } from '@mui/material'

export type TForm = {
    endpoint: string
    inputs: TextFieldProps[]
    title?: string
    buttonText?: string
    className?: string
    children?: ReactNode
}
