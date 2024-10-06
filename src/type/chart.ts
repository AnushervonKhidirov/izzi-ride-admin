import type { TUser } from './auth'

export type TChartData = {
    title?: string
    data: any[]
    xField: string
    yField: string
    separateBy?: string
    theme?: 'light' | 'dark'
}

export type TChart = {
    data: any[]
    xAxis: string
    yAxis: string
    width?: number,
    height?: number,
    className?: string
}

export type TUserTable = {
    users: TUser[]
    className?: string
}
