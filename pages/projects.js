import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'

export default function Projects() {
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
      </main>
    </div>
  )
}
