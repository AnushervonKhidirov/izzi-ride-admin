'use client'
import type { LineConfig } from '@ant-design/charts'

import { Line } from '@ant-design/charts'

const ActiveUsersChart = () => {
    const data = [
        { day: '1', users: 23, device: 'mobile' },
        { day: '1', users: 42, device: 'desktop' },
        { day: '2', users: 21, device: 'mobile' },
        { day: '2', users: 24, device: 'desktop' },
        { day: '3', users: 50, device: 'mobile' },
        { day: '3', users: 55, device: 'desktop' },
        { day: '4', users: 75, device: 'mobile' },
        { day: '4', users: 90, device: 'desktop' },
        { day: '5', users: 49, device: 'mobile' },
        { day: '5', users: 38, device: 'desktop' },
        { day: '6', users: 62, device: 'mobile' },
        { day: '6', users: 52, device: 'desktop' },
        { day: '7', users: 71, device: 'mobile' },
        { day: '7', users: 98, device: 'desktop' },
        { day: '8', users: 65, device: 'mobile' },
        { day: '8', users: 74, device: 'desktop' },
        { day: '9', users: 95, device: 'mobile' },
        { day: '9', users: 54, device: 'desktop' },
        { day: '10', users: 91, device: 'mobile' },
        { day: '10', users: 105, device: 'desktop' },
    ]

    const config: LineConfig = {
        data: data,
        width: 500,
        height: 300,
        xField: 'day',
        yField: 'users',
        shapeField: 'smooth',
        colorField: 'device',
        legend: {
            color: {
                itemLabelFill: '#fff',
                itemLabelFontSize: 12,
                itemLabelFillOpacity: 0.4,
            },
        },
        scale: {
            color: {
                range: ['#f6a821', '#b17001', 'blue'],
            },
        },
        axis: {
            x: {
                title: 'All active users from last month.',
                titleFontSize: 12,
                titleFill: '#fff',
                titleFillOpacity: 0.4,
                labelFill: '#fff',
                labelFontSize: 10,
                grid: true,
                gridStroke: '#fff',
                gridLineDash: [0, 0],
                gridStrokeOpacity: 0.25,
            },
            y: {
                labelFill: '#fff',
                labelFontSize: 10,
                grid: true,
                gridStroke: '#fff',
                gridLineDash: [0, 0],
                gridStrokeOpacity: 0.25,
            },
        },
        style: {
            lineWidth: 2,
        },
    }

    return <Line {...config} />
}

export default ActiveUsersChart
