'use client'
import { PieChart } from '@mui/x-charts'
import type { PieItemId } from '@mui/x-charts'

const pieParams = { height: 200 }

export type TPieChartData = {
    id: PieItemId
    value: number
    label: string
}

type TPieChartDataPercent = {
    id: PieItemId
    value: number
    label: string
    percent: string
}

const Chart = ({ data }: { data: TPieChartData[] }) => {
    const updatedData = calcPercent(data)

    function calcPercent(data: TPieChartData[]): TPieChartDataPercent[] {
        let totalValue = 0
        let newData = data as TPieChartDataPercent[]
    
        newData.forEach(item => {
            totalValue += item.value
        })
    
        return newData.map(item => {
            item.percent = (item.value / (totalValue / 100)).toFixed(2) + '%'
            return item
        })
    }

    return (
        <PieChart
            series={[
                {
                    data: updatedData,
                    arcLabel: item => `${item.label}`,
                    valueFormatter: (_, { dataIndex }) => {
                        return `${updatedData[dataIndex].value} users (${updatedData[dataIndex].percent})`
                    },
                },
            ]}
            slotProps={{
                legend: {hidden: true},
            }}
            {...pieParams}
        ></PieChart>
    )
}

export default Chart
