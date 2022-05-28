import React from "react";
import react from "../../assets/react.png";
import { NavLink } from "react-router-dom";
import "./index.css";

const style = {
  width: "250px",
  margin: "10px",
};

const cardDetails = [
  {
    title: "React Introduction",
    description: "A JavaScript library for building user interfaces.",
    linkTo: "/",
  },
  {
    title: "Class Component",
    description: "A JavaScript library for building user interfaces.",
    linkTo: "/classComponent",
  },
  {
    title: "Functional Component",
    description: "A JavaScript library for building user interfaces.",
    linkTo: "/functionalComponent",
  },
];

export default function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      {/* <p className="text-primary">Welcome to Dashboard</p> */}
      {cardDetails.map((items) => {
        return (
          <div className="card" style={style}>
            <div className="imgProduct">
              <img src={react} />
            </div>
            <div className="card-body">
              <h5 className="card-title">{items.title}</h5>
              <p className="card-text">{items.description}</p>
              <NavLink to={items.linkTo}>
                <a href="#" className="btn btn-primary">
                  Click Here
                </a>
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
}
