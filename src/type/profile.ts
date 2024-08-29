import type { Dispatch, ReactNode, SetStateAction } from 'react'

export type TFullName = {
    firstName: string
    lastName: string
}

export type TProfileField = {
    title: string
    value: string | number
    editing?: boolean
    editable?: boolean
}

export type TProfileFieldsWrapper = {
    name: string
    children: ReactNode
    editing: boolean
    setEditing: Dispatch<SetStateAction<boolean>>
}
