import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Heading, SubHeading } from '../index';
import { IClient } from '../../interfaces/Iclients';

const Clients: React.FC = ({ props: { data } }) => {
  const clientsData: IClient[] = data;

  const clients = clientsData.map((client) => {
    const imageURL = client.attributes.logo.data[0].attributes.url;
    return (
      <div className="mh__clients-image" key={client.id}>
        {imageURL && (
          <Link key={client.id} href={client.attributes.website} passHref>
            <a target="_blank" title={client.attributes.website}>
              <Image
                src={imageURL}
                alt={client.attributes.name}
                layout="fill"
                objectFit="contain"
              ></Image>
            </a>
          </Link>
        )}
      </div>
    );
  });

  return (
    <section className="csection bg-dark-reverse" id="clients">
      <div className="ccontainer">
        <div className="mh__clients">
          <SubHeading subheading="WHO DID I WORK WITH" />
          <Heading heading="Clients" />

          <div className="mh__clients--holder">{clients}</div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
