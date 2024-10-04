import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalState } from "../../context/GlobalContext";

function Navbar() {
  const { serchParm, setSearchParm, handelSubmit } = useContext(GlobalState);
  console.log(serchParm);

  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-semibold">
        <NavLink to={"/"}>FoodRecipe</NavLink>
      </h2>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          name="search"
          value={serchParm}
          onChange={(e) => setSearchParm(e.target.value)}
          placeholder="Enter Items..."
          className=" p-3 px-8 rounded-full outline-none lg:w-96  border border-gray-300 "
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-700 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            className="text-black hover:text-gray-700 duration-300"
          >
            favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
