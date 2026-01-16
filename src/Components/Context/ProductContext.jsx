import { createContext, useContext, useState } from "react";

// create context
const ProductContext = createContext();


export const ProductProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // ADD TO CART
  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === product.id);

      if (exists) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      // product not in cart
      return [...prev, { ...product, qty: 1 }];
    });
  };

  //REMOVE FROM CART
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <ProductContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

//  custom hook
export const useProduct = () => useContext(ProductContext);
