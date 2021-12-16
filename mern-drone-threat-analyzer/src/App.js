import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import DronesList from "./components/drones-list.component";
import CreateDrone from "./components/create-drone.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Routes>
          <Route path="/drones" exact component={DronesList} />
          <Route path="/create" exact component={CreateDrone} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
