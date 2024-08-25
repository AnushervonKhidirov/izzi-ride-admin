import {
    PROFILE_PAGE,
    ADMINS_PAGE,
    CLIENTS_PAGE,
    TRIP_PAGE,
    APP_MANAGEMENT_PAGE,
    APP_VERSION_PAGE,
    SUPPORT_PAGE,
    PROFILE_PAGE_ID,
} from './links'

export const ACCESS_TOKEN = 'accessToken'
export const REFRESH_TOKEN = 'refreshToken'

export const TOKEN_EXPIRED_CODE = 401 // 64
export const TOKEN_EXPIRED_TEXT = 'Unauthorized' // 'token expires'


// TODO: move to .env
export const USER_ACCESSED_PAGES = {
    admin: [ADMINS_PAGE, CLIENTS_PAGE, TRIP_PAGE, APP_MANAGEMENT_PAGE, APP_VERSION_PAGE, SUPPORT_PAGE, PROFILE_PAGE, PROFILE_PAGE_ID],
    user: [CLIENTS_PAGE, TRIP_PAGE, PROFILE_PAGE],
}
