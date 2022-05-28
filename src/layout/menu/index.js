import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <div className="menu">
      <ul className="list-group">
        <NavLink to="/">
          <li className="list-group-item">Dashboard</li>
        </NavLink>
        <NavLink to="/classComponent">
          <li className="list-group-item">Class component</li>
        </NavLink>
        <NavLink to="/functionalComponent">
          <li className="list-group-item">Functional component</li>
        </NavLink>
        <NavLink to="/stateAndProps">
          <li className="list-group-item">State & Props</li>
        </NavLink>
      </ul>
    </div>
  );
}
