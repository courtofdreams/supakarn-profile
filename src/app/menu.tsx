"use client"

import { useState } from "react";
import { MenuItem } from "./menu-item";

const getCurrentMenuStyle = (currentMenu: MenuItem, menuItem: MenuItem) => {
  if (currentMenu === menuItem) {
    return "text-gray-900 underline cursor-pointer";
  }
  return "text-gray-500 hover:text-gray-900 cursor-pointer";
};

export const Menu = () => {
  const [currentMenu, setCurrentMenu] = useState(MenuItem.Home);

  const handleMenuClick = (menuItem: MenuItem) => {
    setCurrentMenu(menuItem);
  };

  return (
    <nav className="bg-transparent">
      <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex justify-end">
          <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
            <li>
              <a
                className={getCurrentMenuStyle(currentMenu, MenuItem.Home)}
                onClick={() => handleMenuClick(MenuItem.Home)}
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li onClick={() => handleMenuClick(MenuItem.Projects)}>
              <a
                className={getCurrentMenuStyle(currentMenu, MenuItem.Projects)}
              >
                Project
              </a>
            </li>
            <li onClick={() => handleMenuClick(MenuItem.Contact)}>
              <a className={getCurrentMenuStyle(currentMenu, MenuItem.Contact)}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
