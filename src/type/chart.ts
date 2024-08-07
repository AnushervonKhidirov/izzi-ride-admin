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
}
