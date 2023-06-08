import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config.js";
import Button from "react-bootstrap/esm/Button.js";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Las contraseñas no coinciden",
      });
      return;
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((UserCredential) => {
          console.log(UserCredential);
          Swal.fire({
            icon: "success",
            title: "Usuario creado con éxito. Inicie seción para continuar",
            showConfirmButton: false,
            timer: 3500,
          });
          navigate("/login");
        })
        .catch((error) => {
          if (error.code === "auth/invalid-email")
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Formato de email incorrecto",
            });
          if (error.code === "auth/email-already-in-use")
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "El email ya se encuentra registrado",
            });
          if (error.code === "auth/weak-password")
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "La contraseña debe tener al menos 6 caracteres",
            });
        });
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <form className="form" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="emailreg" className="form-label">
                Correo Electrónico
              </label>
              <input
                className="form-control"
                type="email"
                placeholder="Ingrese su email"
                value={email}
                id="emailreg"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="passwordreg" className="form-label">
                Contraseña
              </label>
              <input
                className="form-control"
                type="password"
                placeholder="Ingrese su contraseña"
                value={password}
                id="passwordreg"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <div id="emailHelp" className="form-text">
                La contraseña debe tener al menos 6 caracteres.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="passwordreg2" className="form-label">
                Repetir contraseña
              </label>
              <input
                className="form-control"
                type="password"
                placeholder="Ingrese nuevamente su contraseña"
                value={password2}
                id="passwordreg2"
                onChange={(e) => setPassword2(e.target.value)}
                required
              />
            </div>
            <div className="text-center">
              <Button variant="primary" type={"submit"}>
                Registrarme
              </Button>
              <p className="mt-1">o si ya estás registrado</p>
              <NavLink to="/login">
                <Button variant="secondary">Iniciar Sesión</Button>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
