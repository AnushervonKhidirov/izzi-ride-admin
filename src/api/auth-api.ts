import type { ErrorRequest } from '@type/error'
import type { TUser, TTokens, TSignInData, TJoinData } from '@type/auth'

import { GET_USER_DATA_ENDPOINT, JOIN_ENDPOINT, REFRESH_TOKEN_ENDPOINT, SIGN_IN_ENDPOINT } from '@constant/endpoint'
import { TOKEN_EXPIRED_CODE, TOKEN_EXPIRED_TEXT } from '@constant/auth'

type RequestFunc<T, U> = (data: T) => Promise<[null, ErrorRequest] | [U, null]>

export const signIn: RequestFunc<TSignInData, TTokens> = async body => {
    try {
        const signInRequest = await fetch(SIGN_IN_ENDPOINT, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (!signInRequest.ok) {
            throw new Error('Cant sign in, check entered data or join', {
                cause: signInRequest,
            })
        }

        return [await signInRequest.json(), null]
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

        return [await joinRequest.json(), null]
    } catch (err: any) {
        return [null, err]
    }
}

export const getUser: RequestFunc<string | undefined, TUser> = async token => {
    if (!token) return [null, new Error('token is not provided')]

    try {
        const userRequest = await fetch(GET_USER_DATA_ENDPOINT, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        if (!userRequest.ok) {
            throw new Error("Can't get user, try to refresh token", {
                cause: userRequest,
            })
        }

        return [await userRequest.json(), null]
    } catch (err: any) {
        return [null, err]
    }
}

export const refreshToken: RequestFunc<string | undefined, TTokens> = async refreshToken => {
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

        return [await tokenRequest.json(), null]
    } catch (err: any) {
        return [null, err]
    }
}

export const getUserWithRefresh: RequestFunc<TTokens, TUser> = async tokens => {
    const [user, userErr] = await getUser(tokens.access_token)

    if (userErr) {
        if (
            userErr.cause &&
            userErr.cause.status === TOKEN_EXPIRED_CODE &&
            userErr.cause.statusText === TOKEN_EXPIRED_TEXT
        ) {
            const [updatedTokens, tokenErr] = await refreshToken(tokens.refresh_token)

            if (tokenErr) return [null, tokenErr]

            const [user, err] = await getUser(updatedTokens.access_token)

            if (err) return [null, err]

            return [user, null]
        }

        return [null, userErr]
    }

    return [user, null]
}
