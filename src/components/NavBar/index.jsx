import React, { useState } from "react";
import { navItems } from "../../constants";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="flex justify-between items-center  md:px-20 px-8 py-4 shadow-md bg-white fixed top-0 z-50 w-full">
      <a href="#home">
        <img
          src="/logo.png"
          alt="logo"
          className="h-auto w-20 cursor-pointer"
        />
      </a>

      <ul className="hidden md:flex gap-10 text-textColor">
        {navItems.map((item, index) => (
          <a key={index} href={item.path}>
            {item.name}
          </a>
        ))}
      </ul>

      <div className="block md:hidden">
        <button onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ? <X /> : <Menu />}
        </button>

        {openMenu && (
          <ul className="flex flex-col gap-5 text-gray-600 justify-center text-center absolute right-0 top-20 z-50 w-screen hover:text-gray-800 bg-white shadow-md p-20">
            {navItems.map((item, index) => (
              <a key={index} href={item.path} className="cursor-pointer">
                {item.name}
              </a>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}
