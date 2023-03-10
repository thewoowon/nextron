import { signOut, useSession } from 'next-auth/react'
import { Loader } from '@mantine/core'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function SignOut() {
  const { data: session, status } = useSession()
  const router = useRouter()
  useEffect(() => {
    if (status != 'loading' && !session) {
      router.push('/auth/signIn')
      return
    }
  }, [status, session])
  return (
    <div
      style={{ height: '600px' }}
      className="flex flex-col justify-center items-center font-sans-kr-light"
    >
      <div>로그아웃 중이에요. 다른 페이지로 이동하지 마세요.</div>
      <Loader variant="bars" color={'gray'} size={'lg'}></Loader>
    </div>
  )
}

export default SignOut
