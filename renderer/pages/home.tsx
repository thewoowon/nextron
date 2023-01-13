import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { signIn } from 'next-auth/react'

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home - Nextron (with-typescript-tailwindcss)</title>
      </Head>
      <div className='mt-1 w-full flex-wrap flex justify-center'>
        <button onClick={()=>{
          signIn()
        }}>hello</button>
      </div>
    </React.Fragment>
  );
}

export default Home;
