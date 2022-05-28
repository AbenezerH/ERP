import React from 'react'
import {
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Hrnavbar from './Hrnavbar';

const Humanresource = () => {
  return (
    <BrowserRouter>
  <Routes>
    <Hrnavbar />
  </Routes>
  </BrowserRouter>
  )
}

export default Humanresource
