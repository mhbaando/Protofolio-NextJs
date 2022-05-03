import React from 'react';
import Link from 'next/link';
import { Links } from '../index';
import { Router, useRouter } from 'next/router';
// import { Link } from 'react-scroll';

const DesktopLinks: React.FC = () => {
  const routes = useRouter();
  const links = Links.map((link, index) => {
    return (
      <Link href={link.link} key={index}>
        <a className={routes.pathname === link.link ? 'active' : ''}>
          <li>{link.name}</li>
        </a>
      </Link>
    );
  });

  // retunr menu links
  return (
    <div className="mh__nav--links">
      <ul>{links}</ul>
    </div>
  );
};

export default DesktopLinks;
