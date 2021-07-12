import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import  Auth  from "./components/Auth/Auth";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/auth" element={<Auth/>} />
    </Routes>
  );
}
 
export default App
