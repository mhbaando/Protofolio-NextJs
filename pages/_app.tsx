import '../styles/index.scss';
import type { AppProps } from 'next/app';
import { motion, AnimatePresence } from 'framer-motion';
import Script from 'next/script';
function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      {/* Gooogle Analytics Code for tracking visitors */}
      <Script
        id="google-script"
        src="https://www.googletagmanager.com/gtag/js?id=G-Q731TB8LCG"
        strategy="lazyOnload"
      />
      <Script id="google-script-tag" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-Q731TB8LCG');
        `}
      </Script>

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
    </>
  );
}

export default MyApp;
