import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Hrnavbar from './Hrnavbar';

const Humanresource = () => {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/emloyee" element= {<Hrnavbar />} />
  
  </Routes>
  </BrowserRouter>
  )
}

export default Humanresource
