import React, { Component } from "react";
import { HiUserCircle, HiSearch } from "react-icons/hi";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar bg-alta-primary shadow-md shadow-slate-500 sticky top-0">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl text-white">
            daisyUI
          </a>
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
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
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
                <a>Settings</a>
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
