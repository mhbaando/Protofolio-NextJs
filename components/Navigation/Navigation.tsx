import React, { useEffect, useState } from 'react';
import { Brand, DesktopLinks, SocialIcons, MobileMenu } from '../index';
import MenuContext from '../../context/menu.context';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector('body');
    if (isOpen) {
      body?.classList.add('overflow-hidden');
    }

    return () => {
      body?.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  return (
    <section className="section">
      <div className="container mh__nav">
        <Brand />
        <DesktopLinks />
        <MenuContext.Provider value={{ isOpen, setIsOpen }}>
          <SocialIcons />
          <MobileMenu />
        </MenuContext.Provider>
      </div>
    </section>
  );
};

export default Navigation;
