'use client'
import type { FormEvent } from 'react'
import type { TLogInData } from '@type/auth'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Form from '@common/form/form'

import { JOIN_PAGE } from '@constant/links'
import { logInInputs } from '@constant/form'

import { logIn } from '@api/auth-api'
import { addCookies } from '@helper/cookies'

const LogIn = () => {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    async function submitFunc(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        setLoading(true)

        const formData = new FormData(e.currentTarget)
        const body = Object.fromEntries(formData) as TLogInData

        const [user, err] = await logIn(body)

        setLoading(false)

        if (err) {
            alert(err)
        } else {
            addCookies(user)
            router.push('/')
        }
    }

    return (
        <main id="log-in-page">
            <div className="form_overlay">
                <h1>Log In</h1>

                <Form submitFunc={submitFunc} inputs={logInInputs} loading={loading} buttonText="Log in">
                    Don't have account?{' '}
                    <Link href={JOIN_PAGE} title="Request to join">
                        Request to join
                    </Link>
                </Form>
            </div>
        </main>
    )
}

export default LogIn
