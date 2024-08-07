'use client'
import type { FC } from 'react'
import type { TChart } from '@type/chart'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

import { COLORS } from '@constant/colors'

const Chart: FC<TChart> = ({ data, xAxis, yAxis }) => {
    return (
        <ResponsiveContainer>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray='0 0' />
                <XAxis dataKey={xAxis} />
                <YAxis />
                <Tooltip />
                <Line type='linear' dataKey={yAxis} dot={false} stroke={COLORS.primary} strokeWidth={3} />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default Chart
