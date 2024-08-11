import Link from 'next/link'
import Form from '@common/form/form'

import { JOIN_PAGE } from '@constant/links'
import { signInInputs } from '@constant/form'
import styles from './sign-in-page.module.css'

const LogIn = () => {
    return (
        <main className={styles.sign_in_page}>
            <Form endpoint='' inputs={signInInputs} buttonText='Sign in'>
                Don't have account? <Link href={JOIN_PAGE} title='Request to join'>Request to join</Link>
            </Form>
        </main>
    )
}

export default LogIn
