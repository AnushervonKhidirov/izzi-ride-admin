import dynamic from 'next/dynamic'

const AreaChart = dynamic(() => import('@chart/area-chart/area-chart'), { ssr: false })
const LineFillChart = dynamic(() => import('@chart/line-fill-chart/line-fill-chart'), { ssr: false })
const LineChart = dynamic(() => import('@chart/line-chart/line-chart'), { ssr: false })
const PieChart = dynamic(() => import('@chart/pie-chart/pie-chart'), { ssr: false })
const BarChart = dynamic(() => import('@chart/bar-chart/bar-chart'), { ssr: false })
const Table = dynamic(() => import('@chart/table/table'), { ssr: false })

export { AreaChart, LineChart, LineFillChart, PieChart, BarChart, Table }
