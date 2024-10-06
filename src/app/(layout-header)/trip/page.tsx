import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material'

import { BarChart, Table } from '@chart/charts'
import { COLORS } from '@constant/colors'

const Trip = () => {
    function generateBarCharData() {
        const generatedDates = []

        for (let i = 0; i < 30; i++) {
            generatedDates.push({
                date: `2024-05-${i + 1}`,
                visits: Math.round(Math.random() * 4000),
            })
        }

        return generatedDates
    }

    const data = generateBarCharData()

    const columns = [
        { id: 'from', label: 'From' },
        { id: 'to', label: 'To' },
        { id: 'date', label: 'Date' },
    ]

    const rows = [
        {
            from: 'Moscow',
            to: 'Dushanbe',
            date: '2024-05-13',
        },
        {
            from: 'Moscow',
            to: 'Dushanbe',
            date: '2024-05-13',
        },
        {
            from: 'Moscow',
            to: 'Dushanbe',
            date: '2024-05-13',
        },
        {
            from: 'Moscow',
            to: 'Dushanbe',
            date: '2024-05-13',
        },
        {
            from: 'Moscow',
            to: 'Dushanbe',
            date: '2024-05-13',
        },
        {
            from: 'Moscow',
            to: 'Dushanbe',
            date: '2024-05-13',
        },
        {
            from: 'Moscow',
            to: 'Dushanbe',
            date: '2024-05-13',
        },
        {
            from: 'Moscow',
            to: 'Dushanbe',
            date: '2024-05-13',
        },
        {
            from: 'Moscow',
            to: 'Dushanbe',
            date: '2024-05-13',
        },
        {
            from: 'Moscow',
            to: 'Dushanbe',
            date: '2024-05-13',
        },
        {
            from: 'Moscow',
            to: 'Dushanbe',
            date: '2024-05-13',
        },
        {
            from: 'Moscow',
            to: 'Dushanbe',
            date: '2024-05-13',
        },
        {
            from: 'Moscow',
            to: 'Dushanbe',
            date: '2024-05-13',
        },
        {
            from: 'Moscow',
            to: 'Dushanbe',
            date: '2024-05-13',
        },
        {
            from: 'Moscow',
            to: 'Dushanbe',
            date: '2024-05-13',
        },
        {
            from: 'Moscow',
            to: 'Dushanbe',
            date: '2024-05-13',
        },
    ]

    return (
        <div>
            <Accordion elevation={2}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{ color: COLORS.secondary }}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <h2>Bar chart</h2>
                </AccordionSummary>
                <AccordionDetails sx={{ paddingLeft: 0 }}>
                    <BarChart data={data} xAxis="date" yAxis="visits" height={300} />
                </AccordionDetails>
            </Accordion>

            <Accordion elevation={2}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{ color: COLORS.secondary }}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <h2>Table</h2>
                </AccordionSummary>
                <AccordionDetails>
                    <Table columns={columns} rows={rows} />
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default Trip
