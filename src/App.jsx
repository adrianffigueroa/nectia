import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Personas from "./components/Personas";
import AuthWrapper from "./components/AuthWrapper";
import CrudProvider from "./context/CrudContext";

function App() {
  return (
    <CrudProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<AuthWrapper />}>
            <Route path="/personas" element={<Personas />} />
          </Route>
        </Routes>
      </Router>
    </CrudProvider>
  );
}

export default App;
