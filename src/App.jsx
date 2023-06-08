import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CrudProvider from "./context/CrudContext";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <CrudProvider>
      <Router>
        <AppRouter />
      </Router>
    </CrudProvider>
  );
}

export default App;
