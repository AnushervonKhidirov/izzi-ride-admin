export type ErrorCustom = {
    massage?: string
    cause?: any
}

export type ErrorRequest = Omit<ErrorCustom, 'cause'> & {
    cause?: Response
}
