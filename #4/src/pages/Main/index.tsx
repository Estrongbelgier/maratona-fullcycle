import React from "react";
import { Link } from "react-router-dom";
// import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <>
      <Link to="users">
        <button>Listar Usuarios</button>
      </Link>
    </>
  );
};

export default Main;
