import React, { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { Layout } from '@components/Layout'
import toast from 'react-hot-toast'

function Home() {
  const { data: session, status } = useSession()
  const router = useRouter()
  useEffect(() => {
    if (status != 'loading' && !session) {
      router.push('/auth/signIn')
      toast.error('Unauthorized')
      return
    }
  }, [status, session])
  return (
    <Layout>
      <Head>
        <title>WooWonTalk - Home</title>
      </Head>
    </Layout>
  )
}

export default Home
