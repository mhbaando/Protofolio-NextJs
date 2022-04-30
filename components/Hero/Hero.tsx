import Link from 'next/link';
import Image from 'next/image';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { SubHeading } from '../index';
import type { LottiePlayer } from 'lottie-web';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const [lottie, setLottie] = useState<LottiePlayer | null>(null);

  // impor lottie
  useEffect(() => {
    import('lottie-web').then((Lottie) => setLottie(Lottie.default));
  }, []);

  // load the animation
  useEffect(() => {
    if (lottie && refContainer.current) {
      const animation = lottie.loadAnimation({
        container: refContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/assets/svg/hand.json',
      });

      return () => animation.destroy();
    }
  }, [lottie]);

  return (
    <section className="csection">
      <div className="ccontainer mh__header">
        <div className="mh__header--content">
          <SubHeading subheading="Introduction" />
          <div className="mh__header--content__title">
            <motion.div
              whileInView={{ y: ['-10%', '0%'], opacity: [0, 0.5, 1] }}
              className="lottie__animation"
            >
              <h1>Hello</h1>
              <div className="handanimation" ref={refContainer}></div>
            </motion.div>
            <motion.h1 whileInView={{ x: ['10%', '0%'], opacity: [0, 0.5, 1] }}>
              I'm <span>Mohamud</span>
            </motion.h1>
          </div>
          <div className="mh__header--content__desc">
            <motion.p whileInView={{ y: ['30%', '0%'], opacity: [0, 0.5, 1] }}>
              Since beginning my journey as a freelance designer and Developer
              nearby <span>2 years</span> I've done remote work for
              <span> Agencies </span>
              consulted for startup and collaborated with
              <span> Talented people </span> to create digital products
            </motion.p>
          </div>
          <motion.div
            whileInView={{ y: ['-50%', '0%'], opacity: [0, 0.5, 1] }}
            className="mh__header--content__btns"
          >
            <Link href="https://linkedin.com/in/mhbaando">
              <a className="primary" target="_blank">
                <Image
                  src="/assets/heroIcons/LinkedIn.svg"
                  width={18}
                  height={18}
                />
                <p>LinkedIn</p>
              </a>
            </Link>
            <Link href="https://github.com/mhbaando">
              <a className="ghost" target="_blank">
                <Image
                  src="/assets/heroIcons/github.svg"
                  width={18}
                  height={18}
                />
                <p>GitHub</p>
              </a>
            </Link>
          </motion.div>
        </div>
        <motion.div
          whileInView={{
            scale: ['60%', '100%'],
            opacity: [0, 1],
            transition: { delay: 0.15 },
          }}
          className="mh__header--image"
        >
          <motion.div
            whileInView={{ scale: [0.5, 1], opacity: [0, 1] }}
            className="orange-bg"
          ></motion.div>
          <Image
            src="/assets/me/MohamudAbshir-.png"
            alt="Mohamud A. Asbhir"
            width={450}
            height={505}
            priority
            className="my-image"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
