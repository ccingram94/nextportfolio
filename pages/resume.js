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
      <div id="overlay"></div>
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
                <ul><p><u>Intellectual Property Analyst</u>, <br></br>Accenture @ Facebook (2019 - current)</p></ul>
                <ul><p><i>Fielded and actioned reports of infringement of copyright, trademark, counterfeit, and other IP rights on Facebook and Instagram.</i></p></ul>
                <ul><p><u>Novelist,</u> <br></br>Sterling Content LLC (2016 - 2019)</p></ul>
                <ul><p><i>Novelist and freelance writer, General Member of the Romance Writers of America's Published Author Network</i></p></ul>

            <h2>🤘 Education: </h2>
                <ul><p><u>Bachelor of Arts in History</u>, <br></br> The University of Texas at Austin (2012 - 2015)</p></ul>
        </div>
        </motion.main>
    </div>
  )
}
