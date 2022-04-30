import React, { useContext } from 'react';
import { ModelContext } from '../../context/model.context';
import { Contacts } from '../index';
import { ContactFrom } from '../index';

const Model: React.FC = () => {
  const { isModelOpen, setIsModelOpen } = useContext(ModelContext);
  return (
    <>
      {isModelOpen && (
        <div
          className="mh__bgModel"
          id="model"
          onClick={(e) => {
            if (e.target.classList.value == 'mh__model') {
              setIsModelOpen(false);
            }
            return;
          }}
        >
          <div className="mh__model">
            <ContactFrom />
          </div>
        </div>
      )}
    </>
  );
};

export default Model;
