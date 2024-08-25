'use client'
import type { FC } from 'react'
import type { TChart } from '@type/chart'

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

import { COLORS } from '@constant/colors'

const Chart: FC<TChart> = ({ data, xAxis, yAxis }) => {
    return (
        <ResponsiveContainer>
            <AreaChart data={data}>
                <CartesianGrid strokeDasharray="0 0" />
                <XAxis dataKey={xAxis} />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey={yAxis} stroke="none" fill={COLORS.primary} />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default Chart
