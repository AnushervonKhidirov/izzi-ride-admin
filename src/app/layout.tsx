import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { Roboto } from 'next/font/google'

import './globals.css'

export const metadata: Metadata = {
    title: 'iZZi Ride Admin',
}

export const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    style: ['italic', 'normal'],
    subsets: ['latin'],
})

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <html lang='en'>
            <body className={roboto.className}>
                {children}
            </body>
        </html>
    )
}

export default RootLayout
