import DashboardItem from '@components/dashboard-item/dashboard-item'
import AreaChart from '@components/charts/area-chart/area-chart'

const Home = () => {
    return (
        <>
            <DashboardItem title='Total visitors' amount={140} updatedAt={'07-22-2024 22:22'} />
            <AreaChart />
        </>
    )
}

export default Home
