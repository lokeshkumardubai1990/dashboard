import { useState, useContext } from "react";
import logo from "./assets/logo.png";
import Header from "./layout/header";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Classcomp from "./pages/classComp";
import Dashboard from "./pages/dashBoard";
import PagenotFound from "./pages/pageNotFound";
import Menu from "./layout/menu";

function App() {
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
          <Header />
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
