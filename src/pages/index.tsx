import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import MainLayout from '@src/components/layout/main'
import WavePortal from '@components/landing/WavePortal'
import { useEthers } from '@usedapp/core'

const Home: NextPage = () => {
  const { connector } = useEthers()
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <MainLayout>
        {!connector && null}
        {connector && <WavePortal />}
      </MainLayout>
    </>
  )
}

export default Home
