import '../styles/index.scss';
import type { AppProps } from 'next/app';
import { motion, AnimatePresence } from 'framer-motion';
import { invertScale } from 'framer-motion/types/value/use-inverted-scale';
function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
            transition: {
              duration: 1,
              easings: 'easeInOut',
            },
          },
          pageExit: {
            filter: 'blur(0)',
            opacity: 0,
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
