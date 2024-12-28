import React, { createContext, useEffect, useState } from 'react'
export const FavoritesContext = createContext()

function FavoritesProvider({ children }) {
    let localFavorite =JSON.parse(localStorage.getItem("favorites"))
    const [favorites, setFavorites] = useState(localFavorite ? localFavorite : [])

    useEffect(() => {
         localStorage.setItem("favorites",JSON.stringify(favorites))
    }, [favorites]);

    const addToFavorites = (product) => {

        let findFavorite=favorites.find(item=>item.id===product.id)
        if(findFavorite){
            alert("bu mehsul var favoritede")
        }else{
            const updatedFavorites = [...favorites, product];
            setFavorites(updatedFavorites);
        }
       
 
    };
    const removeFromFavorites = (productId) => {
        const updatedFavorites = favorites.filter((item) => item.id !== productId);
        setFavorites(updatedFavorites);

    };
    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
            {children}
        </FavoritesContext.Provider>
    );

}

export default FavoritesProvider
