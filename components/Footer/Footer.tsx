import React from 'react';
import Image from 'next/image';
import { SocialIcons } from '../index';

const Footer: React.FC = () => {
  const yearNow = new Date().getFullYear();
  return (
    <section className="csection bg-dark-reverse ">
      <div className="ccontainer">
        <div className="mh__footer">
          <Image
            src="/assets/logo.svg"
            width={167}
            height={25}
            alt="mhbaando logo"
          />
          <SocialIcons place="footer" />
          <p>{`© ${yearNow} Copyright Allrights Reserved`}</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
