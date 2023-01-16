import React from 'react'
import type { AppProps } from 'next/app'
import { Session } from 'next-auth'
import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'react-hot-toast'

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps<{
  session: Session
}>) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <Toaster></Toaster>
    </SessionProvider>
  )
}

export default MyApp
