import React, { useContext, useState } from 'react';
import IsocialIcons from '../../interfaces/IsocialIcons';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { BiMenuAltRight } from 'react-icons/bi';
import MenuContext from '../../context/menu.context';
export const Scicons: IsocialIcons[] = [
  {
    name: 'Twitter',
    link: 'https://twitter.com/mhbaando',
    imgSrc: '/assets/social-icons/twitter.svg',
  },
  {
    name: 'LinkedIn',
    link: 'https://linkedin.com/in/mhbaando',
    imgSrc: '/assets/social-icons/linkedinIcon.svg',
  },
  {
    name: 'Showwcase',
    link: 'https://mhbaando.showwcase.com',
    imgSrc: '/assets/social-icons/showwcase.svg',
  },
  {
    name: 'Facebook',
    link: 'https://facebook.com/mhbaando',
    imgSrc: '/assets/social-icons/facebook.svg',
  },
];

// iterface for porps
interface Is4Header {
  place?: string;
}

const SocialIcons: React.FC<Is4Header> = ({ place = 'nav' }) => {
  const { isOpen, setIsOpen } = useContext(MenuContext);
  // loop over icons
  const Icons = Scicons.map((icon, index) => {
    return (
      <Link href={icon.link} key={index}>
        <a target="_blank" title={icon.name}>
          <Image src={icon.imgSrc} width={25} height={25} />
        </a>
      </Link>
    );
  });

  // return JSX from the function
  return (
    <div className="mh__scIcons">
      {Icons}
      <AnimatePresence>
        {place == 'nav' && (
          <motion.div onClick={() => setIsOpen(true)}>
            <BiMenuAltRight />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SocialIcons;
