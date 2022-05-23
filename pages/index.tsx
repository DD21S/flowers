import { useState, useEffect } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>
                    Flowers | Home
                </title>
            </Head>
            <main className={ styles.flowers }>

            </main>
        </>
    )
}

export default Home