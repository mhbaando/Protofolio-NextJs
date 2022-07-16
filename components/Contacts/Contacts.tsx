import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Heading, SubHeading, ContactFrom } from '../index';

const Contacts: React.FC = () => {
  // contact info handler
  const info = (heading: string, alt: string, text: string) => {
    return (
      <div className="icon-name">
        <h2>{heading}</h2>
        <p>{text}</p>
      </div>
    );
  };

  return (
    <section className="csection bg-dark" id="contacts">
      <div className="ccontainer">
        <div className="mh__contacts">
          <div className="mh__contacts--data">
            <SubHeading subheading="GET IN TOUCH WITH ME" />
            <Heading heading="Contacts" />
            <p>
              To get my service please don't hesitate to contact me, and I will
              ensure that you will get the best of my services
            </p>
            <div className="info-holder">
              {info(
                'Address',
                'Location Icon',
                'Makka Almukarama Street, Hodan, Mogadishu - Somalia'
              )}
              {info(
                'Email',
                'Email Icon',
                `info@mhbaando.so | www.mhbaando.so`
              )}
            </div>
          </div>
          {/* /contact form */}
          <ContactFrom />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
