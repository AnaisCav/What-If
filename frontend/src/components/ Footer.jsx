import React from "react";

const Footer = ({ labyrintheToggle }) => {
  return (
    <footer
      className={`"relative bottom-0 w-full bg-secondary text-base-content p-4" ${
        labyrintheToggle && "rotate-90"
      }`}
    >
      <aside>
        <p>Copyright © 2023 - All right reserved by What if ?</p>
      </aside>
    </footer>
  );
};

export default Footer;
