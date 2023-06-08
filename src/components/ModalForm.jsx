import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CrudContext } from "../context/CrudContext";
import { useContext } from "react";
import Form from "./CrudForm";

const ModalForm = () => {
  const { show, handleClose, dataToEdit } = useContext(CrudContext);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{dataToEdit ? "Editar" : "Cargar"} Persona</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalForm;
