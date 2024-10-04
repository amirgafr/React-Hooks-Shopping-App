import { Link } from "react-router-dom";

function RecipeItem({ item }) {
  return (
    <div className="flex flex-col w-80 overflow-hidden p-5 bg-white/75 shadow-xl gap-5 border-2 rounded-2xl border-white">
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
        <div className="h-56 w-full">
          <a href="#">
            <img className="mx-auto h-full" src={item.image_url} alt="" />
          </a>
        </div>
        <div className="pt-6">
          <h1 className="text-sm pb-4 font-semibold leading-tight text-gray-900 hover:underline">
            {item.publisher}
          </h1>
          <h1 className="text-lg font-semibold leading-tight text-gray-900 hover:underline">
            {item.title}
          </h1>

          <div className="mt-4 flex items-center">
            <Link
              to={`/recipe-item/${item?.recipe_id}`}
              className="inline-flex items-center rounded-lg bg-gray-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4  focus:ring-primary-300   "
            >
              Recipe Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeItem;
