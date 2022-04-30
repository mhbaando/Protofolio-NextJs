import React, { useState } from 'react';
import Image from 'next/image';
import { Navigation, Heading, SubHeading, LastProjetcs } from '../index';
import { IProject } from '../../interfaces/Iproject';

const AllProjects: React.FC = (props: any) => {
  return (
    <div className="mh__projects bg-dark ">
      <Navigation />
      <section className="csection ">
        <div className="ccontainer">
          <div className="mh__Allprojetcs">
            <SubHeading subheading="ALL MY PROJECTS" />
            <Heading heading="Porjects" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProjects;
