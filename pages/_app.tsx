import "../styles/index.scss";
import type { AppProps } from "next/app";
import { motion, AnimatePresence } from "framer-motion";
import Script from "next/script";
import { ContextPorvider } from "../context/loder-context";
import { useRouter } from "next/router";
import { Loader } from "../components";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps, router }: AppProps) {
  const Router = useRouter();
  const [isVisbile, setIsVisible] = useState(false);
  useEffect(() => {
    const handleStart = () => {
      setIsVisible(true);
    };
    const handleStop = () => {
      setIsVisible(false);
    };

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleStop);
    Router.events.on("routeChangeError", handleStop);

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleStop);
      Router.events.off("routeChangeError", handleStop);
    };
  }, [Router]);

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
                easings: "easeInOut",
              },
            },
            pageExit: {
              filter: "blur(0)",
              opacity: 0,
            },
          }}
        >
          <ContextPorvider>
            {isVisbile && <Loader />}
            <Component {...pageProps} />
          </ContextPorvider>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
