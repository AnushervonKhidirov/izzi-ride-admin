'use client'
import { PieChart } from '@mui/x-charts'
import type { PieItemId, PieValueType } from '@mui/x-charts'

const pieParams = { height: 200 }

export type TPieChart = {
    id: PieItemId
    value: number
    label: string
    percent: string
}

const Chart = ({ data }: { data: TPieChart[] }) => {
    return (
        <PieChart
            series={[
                {
                    data: data,
                    arcLabel: item => `${item.label}`,
                    valueFormatter: (_, { dataIndex }) => {
                        return `${data[dataIndex].value} users (${data[dataIndex].percent})`
                    },
                },
            ]}
            slotProps={{
                legend: {hidden: true}
            }}
            {...pieParams}
        ></PieChart>
    )
}

export function calcPercent(data: PieValueType[]): TPieChart[] {
    let totalValue = 0
    let newData = data as TPieChart[]

    newData.forEach(item => {
        totalValue += item.value
    })

    return newData.map(item => {
        item.percent = (item.value / (totalValue / 100)).toFixed(2) + '%'
        return item
    })
}

export default Chart
