import React, { Component, useContext } from "react";
import { FaBeer, FaUserCircle } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import { Link } from "react-router-dom";

import { ThemeContext } from "utils/context";
import { DarkMode } from "./Button";

const Navbar = ({ children }) => {
  const { isLight, setIsLight } = useContext(ThemeContext);

  return (
    <div className="navbar bg-alta-primary dark:bg-slate-100 shadow-md shadow-slate-500 dark:shadow-amber-500 sticky top-0">
      <div className="flex-1">
        <Link to="/">
          <a className="btn btn-ghost normal-case text-xl leading-5 md:leading-normal text-white dark:text-alta-primary">
            Brand Name
          </a>
        </Link>
      </div>
      <div className="flex-none gap-5">
        <label className="pr-2 form-control flex-row items-center gap-1 rounded-lg bg-white dark:bg-slate-600 ">
          <input
            type="text"
            placeholder="Cari film.."
            className="input focus:outline-none w-32 md:w-72 text-alta-primary bg-transparent dark:text-amber-300 dark:placeholder-amber-200 dark:placeholder-opacity-75"
          />
          <button>
            <BiSearchAlt className="text-4xl text-alta-primary dark:text-amber-400  opacity-50 hover:opacity-100" />
          </button>
        </label>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className=" rounded-full">
              <FaUserCircle className="text-4xl text-white dark:text-alta-primary" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a
                className="focus:bg-slate-700"
                label={isLight ? "Light Mode" : "Dark Mode"}
                onClick={() => setIsLight(!isLight)}
              >
                Dark Mode
              </a>
            </li>
            <li>
              <Link to="/favorites">
                <a className="w-full flex justify-between">
                  Favorites
                  <span className="badge">New</span>
                </a>
              </Link>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Navbar;
