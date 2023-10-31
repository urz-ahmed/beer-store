import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contributors from "./pages/Contributors";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contributors" element={<Contributors />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
