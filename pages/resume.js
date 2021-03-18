import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'

export default function Resume() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Constance.io</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous"></link>

      </Head>
      <motion.main id="main"
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 1 }}
        >
        <div id="left">
            <Link href="/">
                <i class="fas fa-backward"></i>
            </Link>
            <h1>Resume</h1>
            <h2>🤘 Experience: </h2>
                <ul><p><u>Intellectual Property Analyst</u>, Accenture @ Facebook (2019 - current)</p></ul>
                
            <h2>🤘 Education: </h2>
                <ul><p><u>Bachelor of Arts in History</u>, The University of Texas at Austin (2012 - 2015)</p></ul>
        </div>
        </motion.main>
    </div>
  )
}
