import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'


export default function About() {
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
            <h1>About</h1>
            <p>Constance Ingram is a web developer from Austin, Texas.</p>
            <p>She holds a B.A. in History from the University of Texas at Austin (2015).</p>
            <p>She currently works an intellectual property analyst (Accenture @ Facebook).</p>
        </div>
        </motion.main>
    </div>
  )
}
