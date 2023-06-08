import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ModalForm from "./ModalForm";
import Spinner from "react-bootstrap/Spinner";
import { CrudContext } from "../context/CrudContext";
import PersonasRow from "./PersonasRow";

const Personas = () => {
  const { personas, handleShow, loading } = useContext(CrudContext);
  return (
    <div className="container mt-4">
      <Button variant="outline-secondary" onClick={handleShow}>
        Cargar Persona
      </Button>
      <Table striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
            <th>Genero</th>
            <th>Acciones</th>
          </tr>
        </thead>
        {loading ? (
          <tbody>
            <tr>
              <td colSpan="6" className="text-center">
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </td>
            </tr>
          </tbody>
        ) : (
          <tbody>
            {personas &&
              personas.length > 0 &&
              personas.map((persona) => (
                <PersonasRow key={persona.id} persona={persona} />
              ))}
          </tbody>
        )}
      </Table>

      <ModalForm />
    </div>
  );
};

export default Personas;
