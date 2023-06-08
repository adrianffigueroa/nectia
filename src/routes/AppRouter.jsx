import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import { AuthContextProvider } from "../context/AuthContext";
import ProtectedRoutes from "../components/ProtectedRoutes";
import Personas from "../components/Personas";
import Register from "../components/Register";
import Home from "../components/Home";
import NotFound from "../components/NotFound";

const AppRouter = () => {
  return (
    <AuthContextProvider>
      <Routes>
        <Route
          path={"/personas"}
          element={
            <ProtectedRoutes>
              <Personas />
            </ProtectedRoutes>
          }
        />
        <Route exact path={"/"} element={<Home />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/register"} element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthContextProvider>
  );
};

export default AppRouter;
