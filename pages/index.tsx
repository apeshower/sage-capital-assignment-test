import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NameCardLists from '../components/name-card-lists/name-card-lists'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My project</title>
        <meta name="description" content="This is my project" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={""} />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main className={styles.main}>
        <NameCardLists/>
      </main>
    </div>
  )
}

export default Home
