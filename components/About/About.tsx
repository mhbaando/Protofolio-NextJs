import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Techs from './Techs';
import { ServiceLists, SubHeading, Heading } from '../index';

const About: React.FC = () => {
  const titleVarient = {
    inView: { y: ['5%', '0%'], opacity: [0, 0.5, 1] },
  };

  const Services = ServiceLists.map((service, index) => {
    return (
      <motion.div
        whileInView={{
          opacity: [0, 1],
          y: [index % 2 === 0 ? '5%' : '-5%', '0%'],
        }}
      >
        <Image src={service.iconUrl} width={49} height={49} />
        <h2>
          {service.name.split(' ')[0]} <span>{service.name.split(' ')[1]}</span>
        </h2>
        <p>{service.desc}</p>
      </motion.div>
    );
  });

  return (
    <section className="csection">
      <div className="ccontainer">
        <div className="mh__about">
          <div className="mh__about--services">{Services}</div>
          <div className="mh__about--me">
            <SubHeading subheading="WHO Am I" />
            <Heading heading="About me" />
            <motion.p variants={titleVarient} whileInView={titleVarient.inView}>
              I am proffesional front-end devloper with almost two years of
              experience in developing websites using various technologies
              including
              <span>
                {' '}
                html, css, scss, javaScript, Reactjs, Netxjs Angular, Webflow &
                wordpress,{' '}
              </span>
              also i am <span>UI/UX Designer</span>, wih background of 2D
              Animation and Vediography.
            </motion.p>
            <motion.div
              whileInView={{ y: ['-20%', '0%'], opacity: ['0', '1'] }}
              transition={{ ease: 'easeInOut' }}
              className="mh__about--techs"
            >
              <Techs />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
