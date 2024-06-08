import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../Asserts/logo.png";
import { IoIosSearch } from "react-icons/io";
import { LuPenSquare } from "react-icons/lu";

const Navbar = () => {
  const [togglSearch, setToggleSearch] = useState(false);
  const location = useLocation();
  // console.log(location);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="flex-none w-10">
          <img src={logo} alt="" />
        </Link>
        <div
          className={`absolute w-full left-0 top-full mt-0.5 border-b border-grey py-3 px-[5vw] md:border-0  md:block md:relative md:top-0 md:p-0  md:insert-0 md:w-auto md:show ${togglSearch ? "show" : "hide"
            }`}
        >
          <input
            type="text"
            placeholder="Search"
            className="w-full md:w-auto bg-grey p-3 pl-6 pr-[12%] md:pr-6 rounded-full placeholder:text-gray-500 md:pl-12"
          />
          <IoIosSearch className="absolute md:pointer-events-none md:left-5 right-[10%] top-[50%] -translate-y-1/2 text-xl" />
        </div>

        <div className=" flex items-center gap-3 ml-auto">
          <button
            onClick={() => setToggleSearch((currentValue) => !currentValue)}
            className="md:hidden bg-grey w-12 h-12 rounded-full flex items-center justify-center"
          >
            <IoIosSearch className="text-xl" />
          </button>
          <Link
            to="/editor"
            className="hidden md:flex justify-center items-center gap-2 link"
          >
            <LuPenSquare />
            <i>Write</i>
          </Link>
          <Link className={`py-2 ${location.pathname === "/signin" ? "btn-dark" : "btn-light"}`} to="/signin">
            Sign In
          </Link>
          <Link className={`py-2 hidden md:block ${location.pathname === '/signup' ? "btn-dark" : "btn-light"}`} to="/signup">
            Sign Up
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
