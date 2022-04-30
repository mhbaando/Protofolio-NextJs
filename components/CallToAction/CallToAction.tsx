import React, { useContext, useState } from 'react';
import Image from 'next/image';
import { Model } from '../index';
import { ModelContext } from '../../context/model.context';

const CallToAction: React.FC = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);

  return (
    <ModelContext.Provider value={{ isModelOpen, setIsModelOpen }}>
      <Model />
      <section className="csection">
        <div className="ccontainer">
          <div className="mh__cta">
            <div className="mh__cta--info">
              <div>
                <h2>
                  <span>Need</span> My Services ?
                </h2>
                <p>Please Don't Hesitate to Request My Services</p>
              </div>
              <button type="button" onClick={() => setIsModelOpen(true)}>
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>
    </ModelContext.Provider>
  );
};

export default CallToAction;
