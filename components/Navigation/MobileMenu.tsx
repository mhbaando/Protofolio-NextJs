import React, { useContext } from 'react';
import { Links, SocialIcons } from '../index';
import Link from 'next/link';
import MenuContext from '../../context/menu.context';
import { motion, AnimatePresence } from 'framer-motion';
import { RiCloseFill } from 'react-icons/ri';

const MobileMenu: React.FC = () => {
  const { isOpen, setIsOpen } = useContext(MenuContext);

  const parent = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.1,
        easing: 'easeInOut',
        duration: 0.3,
      },
    },
  };
  const child = {
    hidden: { y: -50, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  const links = Links.map((link, index) => {
    return (
      <Link href={link.link} key={index}>
        <a onClick={() => setIsOpen(false)}>
          <motion.li variants={child}>{link.name}</motion.li>
        </a>
      </Link>
    );
  });

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="overlay"
            key="ovly"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1, visibility: 'visible' }}
            exit={{ opacity: 0, scaleX: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            onClick={() => setIsOpen(false)}
          ></motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={parent}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mh__mobile"
          >
            <motion.div
              variants={child}
              className="mh__mobile-Xicon"
              onClick={() => setIsOpen(false)}
            >
              <RiCloseFill />
            </motion.div>
            <motion.ul>
              {links}
              <SocialIcons place="mobile-menu" />
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
