import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ServiceLists } from '../index';
import { Heading, SubHeading } from '../index';
import Techs from './Techs';

const About: React.FC = () => {
  // animation for the title and the about section
  const titleVarient = {
    inView: { y: ['5%', '0%'], opacity: [0, 0.5, 1] },
  };
  const serviceParent = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        easings: 'easeInOut',
        staggerChildren: 0.8,
      },
    },
  };

  // animation each service text
  const serviceChild = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  // loop of the services
  const services = ServiceLists.map((service, index) => {
    return (
      <motion.div
        key={index}
        variants={serviceParent}
        initial="hidden"
        animate="show"
        whileInView={{
          opacity: [0, 1],
          y: [`${index % 2 === 0 ? '30%' : '60%'}`, '0%'],
        }}
        className="mh__about--service__list"
      >
        <motion.h2 variants={serviceChild}>
          {service.name.split(' ')[0]} <br></br>
          <span>{service.name.split(' ')[1]}</span>
        </motion.h2>
        <motion.p variants={serviceChild}>{service.desc}</motion.p>
      </motion.div>
    );
  });

  return (
    <section className="csection bg-dark about-bg" id="about">
      <div className="ccontainer">
        <SubHeading subheading="MY SERVICES" />
        <Heading heading="What I Do" />
        <div className="mh__about">
          <div className="mh__about--service">{services}</div>
          <motion.div
            variants={titleVarient}
            whileInView={titleVarient.inView}
            className="mh__about--me"
          >
            <SubHeading subheading="WHO AM I" />
            <Heading heading="About me" />
            <div className="mh__about--me__info">
              <p>
                I am a professional <span>front-end</span> developer,{' '}
                <span>UI/X</span> Designer, <span>Co-founder</span>, and
                <span> freelancer</span> with almost <span>2+ years</span> of
                experience in developing websites using various technologies
                with a background in <span>2D</span> Animation and{' '}
                <span>Videography</span>.
              </p>
              <motion.div
                className="icons"
                whileInView={{ y: ['10%', '0%'], opacity: ['0', '1'] }}
                transition={{ ease: 'easeInOut' }}
              >
                <Techs />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
