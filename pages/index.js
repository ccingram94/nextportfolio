import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { motion, AnimatePresence } from 'framer-motion'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Constance.io</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous"></link>

      </Head>
      <div id="overlay"></div>
      <motion.main 
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        transition={{ duration: 1 }}
      id="main">
        <div id="left">
          <h1>Constance Ingram</h1><hr></hr>
          <h2>Austin, Texas 🤘</h2>
          <div id="buttons">
            <Link href="/about">
              <button>
                About
              </button>
            </Link>
            <Link href="/resume">
              <button>
                Resume
              </button>
            </Link>
            <Link href="/projects">
              <button>
                Projects
              </button>
            </Link>
            <Link href="/contact">
              <button>
                Contact
              </button>
            </Link>
          </div>
        </div>
 
        </motion.main>
    </div>
  )
}
