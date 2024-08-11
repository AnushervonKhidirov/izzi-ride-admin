import Link from 'next/link'
import Form from '@common/form/form'

import { SIGN_IN_PAGE } from '@constant/links'
import { joinInputs } from '@constant/form'
import styles from './join-page.module.css'

const LogIn = () => {
    return (
        <main className={styles.sign_in_page}>
            <Form endpoint='' inputs={joinInputs} buttonText='Request to join'>
                Already have account? <Link href={SIGN_IN_PAGE} title='Sign in'>Sign in</Link>
            </Form>
        </main>
    )
}

export default LogIn
