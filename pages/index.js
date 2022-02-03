import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Be Kind Be Good</title>
        <meta name="description" content="Be kind be good" />
        <link rel="icon" href="../public/favicon.ico" />
      </Head>

      <div className="bg-logo bg-center bg-cover flex-grow h-44 sm:rounded-lg"/>
        <div className="text-lg">Allo allo</div>
    </div>
  )
}
