import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { navLinks } from "../constants/constants";

const Header = () => {
  return (
    <div className="bg-grayish">
      <div className="w-11/12 md:w-10/12 mx-auto flex items-center justify-between">
        {/* LOGO */}
        <img src={logo} alt="LOGO" />
        {/* NAVLINKS */}
        <div className="flex items-center gap-x-4 lg:gap-x-8">
          <ul className="md:flex gap-x-4 lg:gap-x-8 font-500 hidden">
            {navLinks.map((value) => (
              <li className=" ">
                <Link
                  className="text-grayishTxt hover:text-grayHover"
                  to={value.link}
                >
                  {value.Name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="main-gradient font-bold list-none px-4 py-2 text-white rounded-lg relative">
            <Link to="..">BOOK NOW</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
