import React, { useState, useContext } from "react";
import { Theme } from "../..";

export default function Header() {
  const [showSubMenu, setStatesubMenu] = useState(false);
  const user = useContext(Theme);
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
          <li style={{ background: "#fff" }} className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle d-flex align-items-center"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
              onClick={() => setStatesubMenu(!showSubMenu)}
            >
              <span className="hi">Hi {user.userName}</span>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img (31).webp"
                className="rounded-circle"
                height="22"
                alt="Portrait of a Woman"
                loading="lazy"
              />
            </a>
            <ul
              className={`dropdown-menu ${showSubMenu ? "show" : "hide"}`}
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a className="dropdown-item" href="#">
                  My profile
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Logout
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
