import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css'
import Login from "./pages/Login";
import Register from "./pages/Register";

const App: React.FC = () => {

  return (
    <div className="">
      <Routes>
        <Route path="/">
          <Route index />
          <Route path="register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
