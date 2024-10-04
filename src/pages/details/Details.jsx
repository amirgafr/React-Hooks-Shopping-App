import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalState } from "../../context/GlobalContext";

function Details() {
  const { id } = useParams();

  const { recipeDetails, setRecipeDetails, handelFav, favoritesList } =
    useContext(GlobalState);

  useEffect(() => {
    async function handelSubmit() {
      try {
        const res = await fetch(
          `https://forkify-api.herokuapp.com/api/get?rId=${id}`
        );

        const data = await res.json();
        setRecipeDetails(data.recipe);
      } catch (e) {
        console.log(e);
      }
    }
    handelSubmit();
  }, []);

  return (
    <section className="bg-white px-4 py-8 antialiased md:py-16">
      <div className="mx-auto grid gap-10 max-w-screen-xl rounded-lg bg-gray-50 p-4  md:p-8 lg:grid-cols-12 lg:gap-8 lg:p-16 xl:gap-16">
        <div className="me-auto place-self-center lg:col-span-7">
          <p className="mb-6 text-gray-500 ">{recipeDetails.publisher}</p>
          <h1 className="mb-3 text-2xl font-bold leading-tight tracking-tight text-gray-900  md:text-4xl">
            {recipeDetails.title}
          </h1>

          <Link
            onClick={() => handelFav(recipeDetails)}
            className=" mt-4 inline-block rounded-lg bg-gray-700 hover:bg-gray-900 px-6 py-3.5 text-center font-medium text-white"
          >
            {favoritesList &&
            favoritesList.length > 0 &&
            favoritesList.findIndex(
              (item) => item.id === recipeDetails?.recipe?.id
            ) !== -1
              ? "Remove from favorites"
              : "Add to favorites"}
          </Link>
        </div>
        <div className="lg:col-span-5 lg:mt-0">
          <img
            className="mb-4 h-56 w-56 sm:h-96 sm:w-96 rounded-lg"
            src={recipeDetails.image_url}
            alt="shopping illustration"
          />
        </div>
      </div>
    </section>
  );
}

export default Details;
