import { createContext, useEffect, useState } from "react";
import * as PersonaService from "../services/PersonaService";
export const CrudContext = createContext();
const CrudProvider = ({ children }) => {
  const [personas, setPersonas] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setDataToEdit(null);
    setShow(false);
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    PersonaService.getAll().then((response) => {
      setPersonas(response);
      setLoading(false);
    });
  }, []);

  const createData = (data) => {
    data.id = Math.floor(Math.random() * 10000);
    setPersonas([...personas, data]);
    setShow(false);
  };

  const updateData = (data) => {
    let newData = personas.map((persona) =>
      persona.id === data.id ? data : persona
    );
    setPersonas(newData);
    setShow(false);
  };

  const deleteData = (id) => {
    let isDelete = confirm("¿Estas seguro que deseas eliminar el registro?");
    if (isDelete) {
      let newData = personas.filter((persona) => persona.id !== id);
      setPersonas(newData);
    } else return;
  };
  const data = {
    personas,
    setPersonas,
    show,
    setShow,
    handleClose,
    handleShow,
    createData,
    updateData,
    setDataToEdit,
    dataToEdit,
    deleteData,
    loading,
  };

  return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>;
};

export default CrudProvider;
