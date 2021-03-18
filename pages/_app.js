import '../styles/globals.css'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { route } from 'next/dist/next-server/server/router';

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimateSharedLayout>
      <video autoPlay muted loop id="bgvid">
        <source src="record.mp4" type="video/mp4"></source>
      </video>
    <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
      pageInitial: {
        opacity: 0
      },
      pageAnimate: {
        opacity: 1
      },
      pageExit: {
        opacity: 0
      },
    }}>
      <Component {...pageProps} />
    </motion.div>
    </AnimateSharedLayout>
    )
}


export default MyApp;
