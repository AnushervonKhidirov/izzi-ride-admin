import Link from 'next/link'
import Form from '@common/form/form'

import { SIGN_IN_PAGE } from '@constant/links'
import { joinInputs } from '@constant/form'

const LogIn = () => {
    return (
        <main id='join-page'>
            <div className='form_overlay'>
                <h1>Request to join</h1>

                <Form callback={() => {}} inputs={joinInputs} buttonText='Request to join'>
                    Already have account? <Link href={SIGN_IN_PAGE} title='Sign in'>Sign in</Link>
                </Form>
            </div>
        </main>
    )
}

export default LogIn
