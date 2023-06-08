import React from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="container">
      <div className="row text-center">
        <div className="col">
          <h2>Bienvenido Desafio NECTIA</h2>
          <NavLink to="/login">
            <Button variant="primary">Ir a Log In</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
