import React, { Component } from "react";
import { FaBeer, FaUserCircle } from "react-icons/fa";
import { HiUserCircle, HiSearch } from "react-icons/hi";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar bg-alta-primary shadow-md shadow-slate-500 sticky top-0">
        <div className="flex-1">
          <Link to="/">
            <a className="btn btn-ghost normal-case text-xl text-white">
              Brand Name
            </a>
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className=" rounded-full">
                <FaUserCircle className="text-4xl text-white" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <Link to="/favorites">
                  <a>Favorites</a>
                </Link>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
