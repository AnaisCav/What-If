import React from "react";

const Navbar = () => {
  return (
    <div className="navbar flex justify-between bg-secondary">
      <a className="btn btn-ghost normal-case text-xl ">daisyUI</a>

      <ul className="menu menu-horizontal bg-base-200 rounded-box  ">
        <li>
          <a className="hover:text-red-500">Histoire</a>
        </li>
        <li>
          <a className="hover:text-red-500">Forum</a>
        </li>
        <li>
          <a className="hover:text-red-500">Commentaires</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
