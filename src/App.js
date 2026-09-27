import React from 'react';
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import  Auth  from "./components/Auth/Auth";
import PrivateRoute from "./components/Auth/PrivateRoute";
import { UserProfilePage } from './components/UserInfo/UserProfilePage/UserProfilePage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>} />
      <Route path="/:profileId" element={<PrivateRoute><UserProfilePage/></PrivateRoute>} />
      <Route path="/auth" element={<Auth/>} />
    </Routes>
  );
}
 
export default App
