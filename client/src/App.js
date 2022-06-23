import React from "react";
import { Routes, Route } from "react-router-dom";
import ListPhones from "../Pages/ListPhones";


function App() {
  return (
    <Routes>
      <Route path="/" element={<ListPhones />}></Route>
    </Routes>
  );
}

export default App;