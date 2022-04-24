import React from 'react';
import Link from 'next/link';
import { Links } from '../index';

const DesktopLinks: React.FC = () => {
  const links = Links.map((link, index) => {
    return (
      <Link href={link.link} key={index}>
        <a className={index === 0 ? 'active' : ''}>
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
