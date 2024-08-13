import Link from 'next/link'
import Form from '@common/form/form'

import { JOIN_PAGE } from '@constant/links'
import { signInInputs } from '@constant/form'

const LogIn = () => {
    return (
        <main id='sign-in-page'>
            <div className='form_overlay'>
                <h1>Sign In</h1>

                <Form endpoint='' inputs={signInInputs} buttonText='Sign in'>
                    Don't have account? <Link href={JOIN_PAGE} title='Request to join'>Request to join</Link>
                </Form>
            </div>
        </main>
    )
}

export default LogIn
