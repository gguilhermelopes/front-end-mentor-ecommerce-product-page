import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [cart, setCart] = React.useState(0);
  const [cartModal, setCartModal] = React.useState(false);
  const [cartQ, setCartQ] = React.useState(0);

  return (
    <GlobalContext.Provider
      value={[cart, setCart, cartModal, setCartModal, cartQ, setCartQ]}
    >
      {children}
    </GlobalContext.Provider>
  );
};
