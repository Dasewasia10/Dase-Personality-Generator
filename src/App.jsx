import React from "react";
import { Routes, Route } from "react-router-dom";

import First from "./pages/First";
import GenPer from "./pages/GenPer";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/generator-personality" element={<GenPer />} />
      </Routes>
    </div>
  );
}

export default App;
