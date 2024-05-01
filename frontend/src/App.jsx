import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage/HomePage";
import { trefoil } from "ldrs";

trefoil.register();

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate async task
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
 
        {loading && (
          <div className="loader-overlay">
            <l-trefoil
              size="50"
              stroke="5"
              stroke-length="0.20"
              bg-opacity="0.30"
              speed="1.5"
              color="#ff7373;"
            ></l-trefoil>
          </div>
        )}
      </div>
  
  );
}

export default App;
