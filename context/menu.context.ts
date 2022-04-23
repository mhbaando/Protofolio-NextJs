import React, { createContext } from 'react';

const MenuContext = createContext({
  isOpen: false,
  setIsOpen: (state: boolean) => {},
});

export default MenuContext;
