import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Constance.io</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <video autoPlay muted loop id="bgvid">
        <source src="record.mp4" type="video/mp4"></source>
      </video>
      <main id="main">
        <div id="left">
          <h1>Constance Ingram</h1>
          <h2>Austin, Texas 🤘</h2>
          <button>
            OK!
          </button>
        </div>
        <div></div>
      </main>
    </div>
  )
}
