import React from "react";
import { NavLink } from "react-router-dom";

const menuList = [
  {
    hasSubmenu: false,
    menuTitle: "Dashbaord",
    linkTo: "/",
  },
  {
    hasSubmenu: false,
    menuTitle: "Class component",
    linkTo: "/classComponent",
  },
  {
    hasSubmenu: false,
    menuTitle: "Functional component",
    linkTo: "/functionalComponent",
  },
  {
    hasSubmenu: false,
    menuTitle: "State & Props",
    linkTo: "/stateAndProps",
  },
  {
    hasSubmenu: true,
    subMenu: [
      {
        hasSubmenu: false,
        menuTitle: "Use State",
        linkTo: "/useState",
      },
    ],
    menuTitle: "Hooks",
    linkTo: "/hooks",
  },
];

export default function Menu() {
  return (
    <div className="menu">
      <ul className="list-group">
        {menuList.map((data, index) => {
          return (
            <NavLink key={index} to={data.linkTo}>
              <li className="list-group-item">{data.menuTitle}</li>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
}
