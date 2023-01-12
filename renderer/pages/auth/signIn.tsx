import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function SignIn() {
  return (
    <React.Fragment>
      <Head>
        <title>Heart Lab - SignIn</title>
      </Head>
      <div className='mt-1 w-full flex-wrap flex justify-center'>
        <Link href='/home'>
          <a className='btn-blue'>Go to home page</a>
        </Link>
      </div>
    </React.Fragment>
  )
}

export default SignIn
