import DashboardItem from '@components/dashboard-item/dashboard-item'
import ActiveUsersChart from '@components/charts/active-users/active-users'

const Home = () => {
    return (
        <>
            <DashboardItem title='Total visitors' amount={140} updatedAt={'07-22-2024 22:22'} />
            <ActiveUsersChart />
        </>
    )
}

export default Home
