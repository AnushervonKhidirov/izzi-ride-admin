import type { FC } from 'react'

import { CircularProgress } from '@mui/material'
import { LoadingButton } from '@mui/lab'

import styles from './button.module.css'

type TFromBtn = {
    loading: boolean
    title: string
}

export const FormBtn: FC<TFromBtn> = ({ loading, title }) => {
    return (
        <LoadingButton
            className={styles.form_btn}
            loading={loading}
            loadingIndicator={<>{title} <CircularProgress className={styles.loading_icon} /></>}
            size="medium"
            variant="contained"
            title={title}
            type="submit"
        >
            {title}
        </LoadingButton>
    )
}