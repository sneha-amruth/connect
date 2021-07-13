import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import  Auth  from "./components/Auth/Auth";
import PrivateRoute from "./components/Auth/PrivateRoute";

const App = () => {
  return (
    <Routes>
      <PrivateRoute path="/" element={<Home/>}></PrivateRoute>
      <Route path="/auth" element={<Auth/>} />
    </Routes>
  );
}
 
export default App
