import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'

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
          <h1>Constance Ingram</h1><hr></hr>
          <h2>Austin, Texas 🤘</h2>
          <div id="buttons">
          <button>
            About
          </button>
          <button>
            Resume
          </button>
          <button>
            Projects
          </button>
          <button>
            Contact
          </button>
          </div>
        </div>
      </main>
    </div>
  )
}
