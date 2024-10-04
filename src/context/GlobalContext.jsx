import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalState = createContext(null);

function GlobalContext({ children }) {
  const [serchParm, setSearchParm] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [favoritesList, setFavoritesList] = useState([]);

  const navigate = useNavigate();

  async function handelSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/search?q=${serchParm}`
      );

      const data = await res.json();
      setRecipeList(data.recipes);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  }

  function handelFav(getCurrentItem) {
    console.log(getCurrentItem.recipe_id);
    let cpyFavoritesList = [...favoritesList];
    const index = cpyFavoritesList.findIndex(
      (item) => item.id === getCurrentItem.recipe_id
    );
    console.log(index);

    if (index === -1) {
      cpyFavoritesList.push(getCurrentItem);
    } else {
      cpyFavoritesList.splice(index);
    }

    setFavoritesList(cpyFavoritesList);
  }
  return (
    <GlobalState.Provider
      value={{
        serchParm,
        setSearchParm,
        handelSubmit,
        recipeList,
        loading,
        recipeDetails,
        setRecipeDetails,
        handelFav,
        favoritesList,
      }}
    >
      {children}
    </GlobalState.Provider>
  );
}

export default GlobalContext;
