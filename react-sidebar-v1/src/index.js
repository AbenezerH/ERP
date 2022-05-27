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
import Header from './components/Header';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element= {<Header />}>
      <Route path="" element= {<App />}>
        <Route path="inventory" element={<Inventory />} />
        <Route path="addemployee" element= {<Addemployee />} />
      </Route>
    </Route>

    <Route path="human-Resource" element= {<Hrnavbar />} />
  </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

