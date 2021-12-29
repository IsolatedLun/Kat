import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from "./components/Layout/Navbar";
import Home from "./components/Home";
import { useFetchCatsQuery } from './features/cats-api-slice';
import Overview from "./components/Overview";

function App() {

  

  return (
    <Router>
      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/breeds/:breedName' element={<Overview />} />
        
      </Routes>
    </Router>
  )
}

export default App
