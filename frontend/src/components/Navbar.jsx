import logo from "../assets/images/logo.png";

const Navbar = ({ labyrintheToggle }) => {
  return (
    <div
      className={`${
        labyrintheToggle
          ? "navbar flex justify-between bg-primary transform rotate-90 self-start"
          : "navbar flex justify-between bg-primary"
      }`}
    >
      <img src={logo} alt="Logo" className="h-20" />

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
