import { Link } from "react-scroll";

import logo from "../assets/images/logo2.png";

const Navbar = () => {
  return (
    <nav className="navbar py-4 flex justify-between bg-secondary drop-shadow-xl">
      <img src={logo} alt="Logo" className="h-20" />

      <ul className="hidden lg:flex gap-14 font-megrim text-accent font-extrabold text-2xl pr-8 ">
        <Link
          to="description"
          spy={true}
          smooth={true}
          offset={-300}
          duration={500}
          className="cursor-pointer"
        >
          <li className="hover:text-primary">Histoire</li>
        </Link>
        <Link
          to="forum"
          spy={true}
          smooth={true}
          offset={-250}
          duration={500}
          className="cursor-pointer"
        >
          <li className="hover:text-primary">Forum</li>
        </Link>
        <Link
          to="commentaires"
          spy={true}
          smooth={true}
          offset={-250}
          duration={500}
          className="cursor-pointer"
        >
          <li className="hover:text-primary">Commentaires</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
