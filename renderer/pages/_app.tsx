import React from 'react'
import type { AppProps } from 'next/app'
import { Session } from 'next-auth'
import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'react-hot-toast'
import { Layout } from '@components/Layout'

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{
  session: Session
}>) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Toaster></Toaster>
    </SessionProvider>
  )
}

export default MyApp
