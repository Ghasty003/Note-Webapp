import React from "react";
import { Route, Routes } from "react-router-dom";
import './App.css'
import Register from "./pages/Register";

const App: React.FC = () => {

  return (
    <div className="">
      <Routes>
        <Route path="/">
          <Route index />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
