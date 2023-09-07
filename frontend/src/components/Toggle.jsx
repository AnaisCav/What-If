import PropTypes from "prop-types";

import { useState } from "react";

const Toggle = ({ labyrintheToggle, onLabyrintheButtonClick }) => {
  const handleLabyrintheClick = () => {
    onLabyrintheButtonClick(!labyrintheToggle);
  };
  return (
    <div
      className={`${
        labyrintheToggle
          ? "z-1 flex justify-around bg-primary pt-2 pb-4 drop-shadow-xl rotate-90 self-start"
          : "z-1 flex justify-around bg-primary pt-2 pb-4 drop-shadow-xl"
      }`}
    >
      <div className="flex flex-col items-center">
        <p className="text-black">Tête à l&apos;envers</p>
        <input
          className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-gray-400 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-gray-800 after:content-[''] checked:bg-accent checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-green-400 checked:after:content-[''] focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-accent checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100"
          type="checkbox"
          role="switch"
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-black">Yeux loupe</p>
        <input
          className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-gray-400 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-gray-800 after:content-[''] checked:bg-accent checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-green-400 checked:after:content-[''] focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-accent checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100"
          type="checkbox"
          role="switch"
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-black">Labyrinthe</p>
        <input
          className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-gray-400 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-gray-800 after:content-[''] checked:bg-accent checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-green-400 checked:after:content-[''] focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-accent checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100"
          type="checkbox"
          role="switch"
          onClick={handleLabyrintheClick}
        />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-black">Mauvais goût</p>
        <input
          className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-gray-400 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-gray-800 after:content-[''] checked:bg-accent checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-green-400 checked:after:content-[''] focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-accent checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100"
          type="checkbox"
          role="switch"
        />
      </div>
    </div>
  );
};

Toggle.propTypes = {
  labyrintheToggle: PropTypes.bool.isRequired,
  onLabyrintheButtonClick: PropTypes.func.isRequired,
};

export default Toggle;
