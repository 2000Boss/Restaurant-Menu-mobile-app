import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorites: (id) => {},
  removeFavorites: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favoritesMealID, setfavoritesMealID] = useState([]);

  const addFavorites = (id) => {
    setfavoritesMealID((prev) => [...prev, id]);
  };

  const removeFavorites = (id) => {
    setfavoritesMealID((prev) => prev.filter((mealId) => mealId !== id));
  };

  const values = {
    ids: favoritesMealID,
    addFavorites,
    removeFavorites,
  };

  return (
    <FavoritesContext.Provider value={values}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
