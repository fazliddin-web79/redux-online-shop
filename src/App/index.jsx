import React from "react";
import Navbar from "../Components/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import { navbar } from "../Utils/navbar";
import NotFound from "../NotFound";
import ShowProduct from "../Components/ShowProduct";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route element={<Navbar />}>
        {navbar.map((item) => {
          return (
            <Route key={item.id} path={item.path} element={item.element} />
          );
        })}
        <Route path="/products/:id" element={<ShowProduct />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
