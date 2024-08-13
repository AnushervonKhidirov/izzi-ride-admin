'use client'
import type { FC, FormEvent } from 'react'
import type { TextFieldProps } from '@mui/material'
import type { TForm } from '@type/form'

import { Button, FormControl, InputLabel, OutlinedInput } from '@mui/material'
import { PasswordInput } from '@common/input/input'

import styles from './form.module.css'
import classNames from 'classnames'

const Form: FC<TForm> = ({ endpoint, inputs, className, buttonText = 'submit', children }) => {
    async function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const body = Object.fromEntries(formData)

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            if (!response.ok) throw new Error('whoops')
        } catch (err: any) {
            console.log(err)
        }
    }

    return (
        <form onSubmit={onSubmit} className={classNames(styles.form, className)}>
            {inputs.map(input => (
                <Field
                    key={input.name}
                    type={input.type}
                    name={input.name}
                    label={input.label}
                    required={input.required}
                />
            ))}

            <Button size='medium' variant='contained' title={buttonText} type='submit'>
                {buttonText}
            </Button>

            <div className={styles.additional_content}>{children}</div>
        </form>
    )
}

const Field: FC<TextFieldProps> = ({ name, type, label, required }) => {
    const InputVariants: { [key: string]: FC } = {
        password: PasswordInput,
        default: OutlinedInput,
    }

    const Input: FC<TextFieldProps> = type && InputVariants[type] ? InputVariants[type] : InputVariants.default

    return (
        <FormControl>
            <InputLabel size='small' htmlFor={name} style={{ fontSize: '1em' }}>
                {required ? `${label} *` : label}
            </InputLabel>
            <Input size='small' id={name} name={name} type={type} label={label} required={required} style={{ fontSize: '1em' }} />
        </FormControl>
    )
}

export default Form
