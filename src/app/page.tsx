import { PieChart } from '@chart/charts'
import { PieValueType } from '@mui/x-charts'

import type { TPieChart } from '@chart/pie-chart/pie-chart'
// import { calcPercent } from '@chart/pie-chart/pie-chart'

const Home = () => {
    const data: PieValueType[] = [
        { id: 1, value: 100, label: 'android' },
        { id: 2, value: 200, label: 'ios' },
    ]

    function calcPercent(data: PieValueType[]): TPieChart[] {
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

    return (
        <div className='chart_wrapper'>
            {/* <AreaChart data={data} xAxis='day' yAxis='users' /> */}
            {/* <LineChart data={data} xAxis='day' yAxis='users' /> */}
            {/* <LineFillChart data={data} xAxis='day' yAxis='users' /> */}
            <PieChart data={calcPercent(data)} />
        </div>
    )
}

export default Home
