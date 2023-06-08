import React, { useContext, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import ModalForm from "./ModalForm";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import { CrudContext } from "../context/CrudContext";
import PersonasRow from "./PersonasRow";
import { UserAuth } from "../context/AuthContext";

const Personas = () => {
  const { personas, handleShow, loading, tablaPersonas, setPersonas } =
    useContext(CrudContext);
  const { googleLogout } = UserAuth();
  const [busqueda, setBusqueda] = useState("");
  const handleGoogleLogout = async () => {
    try {
      await googleLogout();
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    let resultadosBusqueda = tablaPersonas.filter((persona) => {
      if (
        persona.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
        persona.apellido.toLowerCase().includes(terminoBusqueda.toLowerCase())
      )
        return persona;
    });
    setPersonas(resultadosBusqueda);
  };
  return (
    <div className="container mt-4 ">
      <div className="d-flex justify-content-between">
        <Button variant="outline-secondary" onClick={handleShow}>
          Cargar Persona
        </Button>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Buscar persona..."
            className="me-2"
            aria-label="Search"
            value={busqueda}
            onChange={handleChange}
          />
        </Form>
      </div>

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
            {personas && personas.length > 0 ? (
              personas.map((persona) => (
                <PersonasRow key={persona.id} persona={persona} />
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">
                  <p>Su busqueda no produjo resultados</p>
                </td>
              </tr>
            )}
          </tbody>
        )}
      </Table>
      <div className="d-flex justify-content-end">
        <Button variant="outline-danger" onClick={handleGoogleLogout}>
          Salir
        </Button>
      </div>
      <ModalForm />
    </div>
  );
};

export default Personas;
