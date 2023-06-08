import React from "react";
import { useContext, useState, useEffect } from "react";
import { CrudContext } from "../context/CrudContext";
import Swal from "sweetalert2";

const initailForm = {
  id: null,
  nombre: "",
  apellido: "",
  email: "",
  genero: "",
};

const CrudForm = () => {
  const { createData, updateData, dataToEdit, setDataToEdit } =
    useContext(CrudContext);
  const [form, setForm] = useState(initailForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initailForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.apellido || !form.email || !form.genero) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Datos incompletos",
      });
      return;
    }
    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = () => {
    setForm(initailForm);
    setDataToEdit(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          id="nombre"
          name="nombre"
          onChange={handleChange}
          value={form.nombre}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="apellido" className="form-label">
          Apellido
        </label>
        <input
          type="text"
          className="form-control"
          id="apellido"
          name="apellido"
          onChange={handleChange}
          value={form.apellido}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          onChange={handleChange}
          value={form.email}
          required
        />
      </div>
      <label htmlFor="genero" className="form-label">
        Género
      </label>

      <select
        className="form-select mb-3 form-check"
        aria-label="Default select example"
        id="genero"
        name="genero"
        onChange={handleChange}
        value={form.genero}
        required
      >
        <option>Seleccione</option>
        <option value="Masculino">Masculino</option>
        <option value="Femenino">Femenino</option>
        <option value="No Binario">No Binario</option>
      </select>

      <button type="submit" className="btn btn-primary">
        Guardar
      </button>
    </form>
  );
};

export default CrudForm;
