import React, { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

function Home() {
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    console.log(session)
    if (!session) {
      console.log('로그인이 필요합니다.')
      //router.push('/auth/signIn')
    }
  }, [session])
  return (
    <div>
      <Head>
        <title>WooWonTalk - Home</title>
      </Head>
      <div className="w-full flex flex-col justify-center">
        <div></div>
      </div>
    </div>
  )
}

export default Home
