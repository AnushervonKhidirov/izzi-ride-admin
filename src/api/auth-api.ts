import type { ErrorCustom } from '@type/error'
import type { TUser, TTokens, TLogInData, TJoinData } from '@type/auth'

import {
    GET_USER_ENDPOINT,
    JOIN_ENDPOINT,
    REFRESH_TOKEN_ENDPOINT,
    LOG_IN_ENDPOINT,
    GET_ALL_USERS_ENDPOINT,
    GET_SINGLE_USER_ENDPOINT,
} from '@constant/endpoint'
import { TOKEN_EXPIRED_CODE, TOKEN_EXPIRED_TEXT } from '@constant/auth'

type RequestFuncOptional<T, U> = (data?: T) => Promise<[null, ErrorCustom<Response>] | [U, null]>
type RequestFunc<T, U> = (data: T) => Promise<[null, ErrorCustom<Response>] | [U, null]>

type TLogInResponse = TUser & TTokens

export const logIn: RequestFunc<TLogInData, TTokens> = async body => {
    try {
        const logInRequest = await fetch(LOG_IN_ENDPOINT, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (!logInRequest.ok) {
            throw new Error('Cant sign in, check entered data or join', {
                cause: logInRequest,
            })
        }

        const data = (await logInRequest.json()) as TLogInResponse

        // NOTE: fake api only
        data.accessToken = data.token || ''

        const tokens: TTokens = { accessToken: data.accessToken, refreshToken: data.refreshToken }

        return [tokens, null]
    } catch (err: any) {
        return [null, err]
    }
}

export const join: RequestFunc<TJoinData, any> = async body => {
    try {
        const joinRequest = await fetch(JOIN_ENDPOINT, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (!joinRequest.ok) {
            throw new Error('Cant join, try again later', {
                cause: joinRequest,
            })
        }

        const response = await joinRequest.json()

        return [response, null]
    } catch (err: any) {
        return [null, err]
    }
}

export const getUser: RequestFunc<string | undefined, TUser> = async token => {
    if (!token) return [null, new Error('token is not provided')]

    try {
        const userRequest = await fetch(GET_USER_ENDPOINT, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        if (!userRequest.ok) {
            throw new Error("Can't get user, try to refresh token", {
                cause: userRequest,
            })
        }

        const response = await userRequest.json()

        return [response, null]
    } catch (err: any) {
        return [null, err]
    }
}

export const getSingleUser: RequestFunc<number | string, TUser> = async id => {
    try {
        const userRequest = await fetch(GET_SINGLE_USER_ENDPOINT.replace('[id]', id.toString()))

        if (!userRequest.ok) {
            throw new Error("Can't get user, try again later", {
                cause: userRequest,
            })
        }

        const response = await userRequest.json()

        return [response, null]
    } catch (err: any) {
        return [null, err]
    }
}

export const getAllUsers: RequestFuncOptional<string, TUser[]> = async filters => {
    try {
        const endpoint = filters ? `${GET_ALL_USERS_ENDPOINT}/filter?${filters}` : GET_ALL_USERS_ENDPOINT

        const usersRequest = await fetch(endpoint)

        if (!usersRequest.ok) {
            throw new Error("Can't get users, try to refresh token", {
                cause: usersRequest,
            })
        }

        const { users } = await usersRequest.json()

        return [users, null]
    } catch (err: any) {
        return [null, err]
    }
}

export const refreshTokens: RequestFunc<string | undefined, TTokens> = async refreshToken => {
    if (!refreshToken) return [null, new Error('token is not provided')]

    try {
        const tokenRequest = await fetch(REFRESH_TOKEN_ENDPOINT, {
            method: 'POST',
            body: JSON.stringify({
                refreshToken: refreshToken,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (!tokenRequest.ok) {
            throw new Error("Can't refresh token, pleas sign in again", {
                cause: tokenRequest,
            })
        }

        const response = await tokenRequest.json()

        return [response, null]
    } catch (err: any) {
        return [null, err]
    }
}

export const getUserWithRefresh: RequestFunc<TTokens, TUser> = async tokens => {
    const [user, userErr] = await getUser(tokens.accessToken)

    if (userErr) {
        if (
            userErr.cause &&
            userErr.cause.status === TOKEN_EXPIRED_CODE &&
            userErr.cause.statusText === TOKEN_EXPIRED_TEXT
        ) {
            const [updatedTokens, tokenErr] = await refreshTokens(tokens.refreshToken)

            if (tokenErr) return [null, tokenErr]

            // NOTE: fake api only
            updatedTokens.accessToken = updatedTokens.token || ''

            const [user, err] = await getUser(updatedTokens.accessToken)

            if (err) return [null, err]

            return [user, null]
        }

        return [null, userErr]
    }

    return [user, null]
}
