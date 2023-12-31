import { NavLink } from "react-router-dom";
import logo from "/Drawei.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 text-white flex justify-center font-semibold text-lg ">
      <div className="flex justify-between items-center bg-black w-4/5 max-w-6xl hover:shadow-lg rounded-2xl p-2">
        <div className="ml-4">
          <a href=""><img src={logo} alt="Logo" className="w-44" /></a>   
        </div>
        <ul className="flex justify-around mr-4 w-1/4">
          <li className="hover:border-solid hover:border-b-4 hover:border-white my-1">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="hover:border-solid hover:border-b-4 hover:border-white my-1 mx-4">
            <NavLink to="/playground">Playground</NavLink>
          </li>
          <li className="hover:border-solid hover:border-b-4 hover:border-white my-1">
            <a href="https:github.com/amanmawar17/drawei" target="blank">
              Github
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
