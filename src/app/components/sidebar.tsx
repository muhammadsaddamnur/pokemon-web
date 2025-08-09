import React, { useState } from "react";

import Lottie from "lottie-react";
import animationData from "@/assets/lotties/pokeball.json";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-20 p-2 rounded-md bg-gray-200 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
              className="stroke-black"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
              className="stroke-black"
            />
          )}
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed m:fixed md:block md:w-64 top-0 left-0 w-64 p-8 min-h-screen bg-gray-200 transition-transform duration-300 ease-in-out z-10`}
      >
        <h1 className="text-xl py-10 md:py-0 font-semibold text-black">Pokemon</h1>
        <ul className="mt-8">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => {
              window.location.href = `/`;
            }}
          >
            <div className="rounded-full overflow-hidden w-[40px] h-[40px]">
              <Lottie
                animationData={animationData}
                loop={true}
                autoplay={true}
                style={{ height: 40, width: 40 }}
              />
            </div>
            <span className="ml-2 font-semibold text-gray-800">Pokédex</span>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
