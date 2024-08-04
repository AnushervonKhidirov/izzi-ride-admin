'use client'
import type { FC } from 'react'
import type { AreaConfig } from '@ant-design/charts'

import { Area } from '@ant-design/charts'

import { COLORS } from '@constant/colors'

type TAreaChart = {
    title: string
    data: any[]
    xField: string
    yField: string
    separateBy?: string
    theme?: 'light' | 'dark'
}

const AreaChart: FC<TAreaChart> = ({ title, data, xField, yField, separateBy, theme = 'dark' }) => {
    const color = theme === 'light' ? '#fff' : '#000'

    const config: AreaConfig = {
        data: data,
        xField: xField,
        yField: yField,
        shapeField: 'smooth',
        colorField: separateBy,
        legend: {
            color: {
                itemLabelFill: color,
                itemLabelFontSize: 12,
                itemLabelFillOpacity: 0.4,
            },
        },
        scale: {
            color: {
                range: [COLORS.primary, COLORS.secondary],
            },
        },
        axis: {
            x: {
                title: title,
                titleFontSize: 12,
                titleFill: color,
                titleFillOpacity: 0.4,
                labelFill: color,
                labelFontSize: 10,
                grid: true,
                gridStroke: color,
                gridLineDash: [0, 0],
                gridStrokeOpacity: 0.25,
            },
            y: {
                labelFill: color,
                labelFontSize: 10,
                grid: true,
                gridStroke: color,
                gridLineDash: [0, 0],
                gridStrokeOpacity: 0.25,
            },
        },
        style: {
            fill: COLORS.primary,
        },
    }

    return <Area {...config} />
}

export default AreaChart
