import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthContext from "./context/AuthContext";
import AddNote from "./pages/AddNote";

function App () {

  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({children}) => {
    if (!currentUser) {
      return <Navigate to="/login" />
    }

    return children;
  }

  return (
    <div className="">
      <Routes>
        <Route path="/">
          <Route index element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new" element={<AddNote />} />
        </Route>
        </Routes>
    </div>
  )
}

export default App
