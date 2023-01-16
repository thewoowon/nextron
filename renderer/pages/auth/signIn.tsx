import React from 'react'
import Head from 'next/head'
import {
  getProviders,
  signIn,
  getSession,
  getCsrfToken,
  LiteralUnion,
  ClientSafeProvider,
  useSession,
} from 'next-auth/react'

function SignIn() {
  return (
    <React.Fragment>
      <Head>
        <title>Heart Lab - SignIn</title>
      </Head>
      <div className="mt-1 w-full flex-wrap flex justify-center">
        <button
          className="btn-blue"
          onClick={() => {
            signIn('google')
          }}
        >
          {' '}
          signin
        </button>
      </div>
    </React.Fragment>
  )
}

export default SignIn
