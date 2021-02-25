import Head from 'next/head'

const name = 'jbloup'
export const siteTitle = 'Jean-Baptiste LOUP'

export default function Layout({ children}) {

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>{siteTitle}</title>
            </Head>
            {children}
        </>
    )
}
