import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global.css";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";
import Addnew from "./Pages/Addnew";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Addnew" element={<Addnew />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;