import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Thia</title>
        <meta name="description" content="Thia on web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        Thia
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
