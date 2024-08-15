export type TUser = {
    id: number
    email: string
    password: string
    name: string
    role: string
    avatar: string
}

export type TUserRole = 'admin' | 'marketer'

export type TTokens = {
    access_token: string
    refresh_token: string
}

export type TSignInData = {
    email: string
    password: string
}
