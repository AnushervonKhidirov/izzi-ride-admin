import type { FC, HTMLAttributeAnchorTarget, PropsWithChildren } from 'react'
import type { TooltipProps } from '@mui/material'

import { CircularProgress, Button, Tooltip } from '@mui/material'
import { LoadingButton } from '@mui/lab'

import classNames from 'classnames'
import styles from './button.module.css'

type TFromBtn = {
    loading: boolean
    title: string
}

type TLinkBtn = PropsWithChildren & {
    title: string
    href: string
    target: HTMLAttributeAnchorTarget
    tooltipPlacement?: TooltipProps['placement']
    className?: string
}

export const FormBtn: FC<TFromBtn> = ({ loading, title }) => {
    return (
        <LoadingButton
            className={styles.form_btn}
            loading={loading}
            loadingIndicator={
                <>
                    {title} <CircularProgress className={styles.loading_icon} />
                </>
            }
            size="medium"
            variant="contained"
            title={title}
            type="submit"
        >
            {title}
        </LoadingButton>
    )
}

export const LinkButton: FC<TLinkBtn> = ({ href, target, title, children, tooltipPlacement }) => {
    return (
        <Tooltip title={title} placement={tooltipPlacement}>
            <Button
                href={href}
                target={target}
                variant="contained"
                className={classNames(styles.link_btn, classNames)}
                sx={{ fontFamily: 'inherit' }}
            >
                {children}
            </Button>
        </Tooltip>
    )
}
