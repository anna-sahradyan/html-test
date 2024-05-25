import { createContext, useContext, useState } from 'react';

const StateContext = createContext();
export const StateChangeProvider = ({ children }) => {
  const [close, setClose] = useState(false);
  const openMenu = () => {
    setClose(prev => !prev);
  };
  const closeMenu = () => {
    setClose(false);
  };
  return (
    <StateContext.Provider
      value={{
        closeMenu,
        openMenu,
        close,
        setClose,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useStateContext = () => useContext(StateContext);
