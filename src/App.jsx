import React, { useContext } from 'react';
import Register from './pages/Register';
import "./styles/register.css";
import Login from "./pages/login";
import Home from "./pages/Home";
// import { AuthContext } from './context/AuthContext';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  // const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
