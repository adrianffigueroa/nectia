import { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config.js";
import { UserAuth } from "../context/AuthContext.jsx";
import Button from "react-bootstrap/esm/Button.js";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";

const Login = () => {
  const { googleLogin, user } = UserAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      if (user != null) navigate("/personas");
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((UserCredential) => {
        console.log(UserCredential);
        navigate("/personas");
      })
      .catch((error) => {
        if (
          error.code === "auth/wrong-password" ||
          error.code === "auth/user-not-found"
        )
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Usuario o contraseña incorrectos",
          });
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-6">
          <form className="form" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="emaillog" className="form-label">
                Correo Electrónico
              </label>
              <input
                className="form-control"
                type="email"
                placeholder="Ingrese su email"
                value={email}
                id="emaillog"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="passwordlog">Contraseña</label>
              <input
                className="form-control"
                type="password"
                placeholder="Ingrese su contraseña"
                value={password}
                id="passwordlog"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="button-container">
              <div className="d-flex justify-content-center">
                <Button variant="primary" type={"submit"} className="mx-2">
                  Iniciar Sesión
                </Button>
                <NavLink to="/register">
                  <Button variant="secondary" className="mx-2">
                    Registrarme
                  </Button>
                </NavLink>
              </div>
            </div>
            <p className="text-center mt-2">o inicia sesión con tus redes</p>
            <div className="d-flex justify-content-center">
              <span onClick={handleGoogleLogin}>
                <Button
                  variant="primary"
                  type={"button"}
                  className="d-flex justify-content-center"
                >
                  <FaGoogle />
                </Button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
