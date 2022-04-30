import { createContext } from 'react';

export const ModelContext = createContext({
  isModelOpen: false,
  setIsModelOpen: (isModelOpen: boolean) => {},
});
