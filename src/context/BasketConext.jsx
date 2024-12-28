import React, { createContext, useEffect, useState } from 'react';
export const BasketContext = createContext();  

function BasketProvider({ children }) {
  let localBaskets = JSON.parse(localStorage.getItem('baskets'));  
  const [baskets, setBaskets] = useState(localBaskets ? localBaskets : []);  

  useEffect(() => {
    localStorage.setItem('baskets', JSON.stringify(baskets));  
  }, [baskets]);

  const addToBaskets = (product) => { 
    let findBasketItem = baskets.find((item) => item.id === product.id);
    if (findBasketItem) {
      alert('Bu məhsul səbətdə var');
    } else {
      const updatedBaskets = [...baskets,{...product,count:1}];
      setBaskets(updatedBaskets);
    }
  };

  const removeFromBaskets = (productId) => {  
    const updatedBaskets = baskets.filter((item) => item.id !== productId);
    setBaskets(updatedBaskets);
  };

  return (
    <BasketContext.Provider value={{ baskets,setBaskets, addToBaskets, removeFromBaskets }}>
      {children}
    </BasketContext.Provider>
  );
}

export default BasketProvider;
