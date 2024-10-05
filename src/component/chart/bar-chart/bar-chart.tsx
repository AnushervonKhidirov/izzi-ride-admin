'use client'
import type { FC } from 'react'
import type { TChart } from '@type/chart'
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

import { COLORS } from '@constant/colors'

const Chart: FC<TChart> = ({ data, xAxis, yAxis }) => {
    return (
        <ResponsiveContainer>
            <BarChart data={data}>
                <CartesianGrid strokeDasharray="0 0" />
                <XAxis dataKey={xAxis} />
                <YAxis />
                <Tooltip />
                <Bar dataKey={yAxis} fill={COLORS.primary} />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default Chart
