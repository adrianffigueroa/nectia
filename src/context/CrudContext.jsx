import { createContext, useEffect, useState } from "react";
import * as PersonaService from "../services/PersonaService";
import Swal from "sweetalert2";
export const CrudContext = createContext();
const CrudProvider = ({ children }) => {
  const [personas, setPersonas] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [loading, setLoading] = useState(true);
  const [busqueda, setBusqueda] = useState("");
  const [tablaPersonas, setTablaPersonas] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setDataToEdit(null);
    setShow(false);
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    PersonaService.getAll().then((response) => {
      setPersonas(response);
      setTablaPersonas(response);
      setLoading(false);
    });
  }, []);

  const createData = (data) => {
    data.id = Math.floor(Math.random() * 10000);
    setPersonas([...personas, data]);
    setTablaPersonas([...personas, data]);
    setShow(false);
  };

  const updateData = (data) => {
    let newData = personas.map((persona) =>
      persona.id === data.id ? data : persona
    );
    setPersonas(newData);
    setShow(false);
    Swal.fire({
      icon: "success",
      title: "Registro editado con éxito",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const deleteData = (id) => {
    Swal.fire({
      title: "¿Está seguro que desea elimiar el registro?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        let newData = personas.filter((persona) => persona.id !== id);
        setPersonas(newData);
        setTablaPersonas(newData);
        Swal.fire("¡Eliminado!", "El registro ha sido eliminado", "success");
      }
    });
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
    setBusqueda,
    busqueda,
    setTablaPersonas,
    tablaPersonas,
  };

  return <CrudContext.Provider value={data}>{children}</CrudContext.Provider>;
};

export default CrudProvider;
