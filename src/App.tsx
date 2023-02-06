import './App.css';
import { useLocation, Routes, Route, Navigate } from "react-router-dom";
import Main from './Main';
import React from 'react';

function App() {
  const location=useLocation();
  console.log("hi")
  console.log(location)
  return (
    
    <Routes location={location}>
              <Route path="/app">
                <Main/>
              </Route>
              
              <Route>
                <Navigate to="/app" />
              </Route>
    </Routes>
  );
}

export default App;
