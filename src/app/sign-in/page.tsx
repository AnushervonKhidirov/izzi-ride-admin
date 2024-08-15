'use client'
import Link from 'next/link'
import Form from '@common/form/form'

import { SIGN_IN_ENDPOINT } from '@constant/endpoint'
import { JOIN_PAGE } from '@constant/links'
import { signInInputs } from '@constant/form'

import { addCookies } from '@helper/cookies'
import { FormEvent } from 'react'

const LogIn = () => {
    async function submitFunc(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const body = Object.fromEntries(formData)

        try {
            const response = await fetch(SIGN_IN_ENDPOINT, {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            if (!response.ok) throw new Error('whoops')

            const result = await response.json()

            console.log(result)

            addCookies(result)
        } catch (err: any) {
            console.log(err)
        }
    }

    return (
        <main id='sign-in-page'>
            <div className='form_overlay'>
                <h1>Sign In</h1>

                <Form inputs={signInInputs} buttonText='Sign in' submitFunc={submitFunc}>
                    Don't have account?{' '}
                    <Link href={JOIN_PAGE} title='Request to join'>
                        Request to join
                    </Link>
                </Form>
            </div>
        </main>
    )
}

export default LogIn
