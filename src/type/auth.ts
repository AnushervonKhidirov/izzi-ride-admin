export type TUser = {
    id: number
    username: string
    firstName: string
    lastName: string
    gender: TGender
    email: string
    phone: string
    role: TUserRole
}

export type TUserRole = 'admin' | 'user'
export type TGender = 'male' | 'female'

export type TTokens = {
    // NOTE: fake api only
    token?: string
    accessToken: string
    refreshToken: string
}

export type TLogInData = {
    username: string
    password: string
}

export type TJoinData = {
    first_name: string
    last_name?: string
}
