import { useState } from "react";
import logo from "./assets/logo.png";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Classcomp from "./pages/classComp";
import Dashboard from "./pages/dashBoard";
import PagenotFound from "./pages/pageNotFound";
import Menu from "./layout/menu";

function App() {
  const [showSubMenu, setStatesubMenu] = useState(false);
  return (
    <div className="container">
      <div className="row">
        <div className="col-2 navLeft">
          <div className="logo">
            <img src={logo} />
          </div>
          <Menu />
        </div>
        <div className="col-10 navRight">
          <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <ul className="navbar-nav">
                <li
                  style={{ background: "#fff" }}
                  className="nav-item dropdown"
                >
                  <a
                    className="nav-link dropdown-toggle d-flex align-items-center"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                    onClick={() => setStatesubMenu(!showSubMenu)}
                  >
                    <span className="hi">Hi</span>
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
          <div className="bodyContainer">
            {
              <Routes>
                <Route path="/classComponent" element={<Classcomp />}></Route>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="*" element={<PagenotFound />}></Route>
              </Routes>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
