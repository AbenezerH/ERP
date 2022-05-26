import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Inventory from './components/inventory/Inventory';
import Hrnavbar from './components/Hr/Hrnavbar'
import Addemployee from './components/Hr/Addemployee'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element= {<App />} />
    <Route path="human-Resource" element= {<Hrnavbar />} />
    <Route path="/inventory" element={<Inventory />} />
    <Route path="/addemployee" element= {<Addemployee />} />
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

