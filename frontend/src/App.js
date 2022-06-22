// import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from "react";
import Home from "./pages/home/Home"
import Profile from './pages/profile/Profile'
import Register from './pages/register/Register'
import VerifyEmail from './VerifyEmail';
import Login from './pages/login/Login'
import {useState, useEffect} from 'react'
import {AuthProvider} from './AuthContext'
import {auth} from './firebase'
import {onAuthStateChanged} from 'firebase/auth'
import PrivateRoute from './PrivateRoute'
import {Navigate} from 'react-router-dom'

import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import FinanceReport from "./pages/financeReport/FinanceReport";
import Sales from "./pages/sales/Sales";
import AddNews from "./pages/sales/AddNews";
import Expense from "./pages/expense/Expense";
import Asset from "./pages/asset/Asset";
import Income from "./pages/income/Income";
import Liability from "./pages/liability/Liability"
import BrandCategory from "./pages/brandCategory/BrandCategory";
import Brandnew from "./pages/brandCategory/Brandnew";
import Catagorynew from "./pages/brandCategory/Catagorynew"
//import MeasurementCategory from "./pages/measurementCategory/MeasurementCategory";
import DamagedGood from "./pages/damagedgood/DamagedGood";
import Adddamaged from "./pages/damagedgood/Adddamaged";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import InventoryNew from "./pages/new/InventoryNew";
import { userInputs } from "./formSource";
import { saleInputs } from "./Financeinput"
import { inInputs, brandInputs, categoryInputs, damagedInputs, warantyInputs  } from "./Inventorysource";
import { DarkModeContext } from "./context/darkModeContext";
import { useContext } from "react";
import "./style/dark.scss";
import Warranty from './pages/color/Warranty';
import AddNew from './pages/color/AddNew';
import Notification from './pages/notifications/Notification';
import Employ from './pages/HR/Employ';
import Grade from './pages/HR/Grade';
import Payrol from './pages/HR/Payrol';
import Addgrade from './pages/new/Addgrade';
import AddDep from './pages/new/AddDep';
import Department from './pages/HR/Department';
import Hrnew from './pages/new/Hrnew';
import { empInputs, gradeInputs, depInputs } from "./Hrsource";
import SingleUser from './pages/single/SingleUser';
import SingleProduct from './pages/single/SingleProduct';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    })
  }, [])

  return (
    <div className={darkMode ? "app dark" : "app"}>
    <Router>
      <AuthProvider value={{currentUser, loading, timeActive, setTimeActive}}>
        <Routes>           
          {/*  */}
            <Route path="/users">
              <Route index element={<Users />} />
              <Route path=":userId" element={<SingleUser title={"User"}/>} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="/products">
              <Route index element={<Products />} />
              <Route path=":productId" element={<SingleProduct title={"Product"}/>} />
              <Route
                path="InventoryNew"
                element={<InventoryNew inputs={inInputs} title="Add New Product" />}
              />
            </Route>
            <Route path="/brandCategory">
              <Route index element={<BrandCategory />} />
              <Route path=":brandCategoryId" element={<Single />} />
              <Route
                path="brand"
                element={<Brandnew inputs={brandInputs} title="Add New brand" />}
              />
               <Route
                path="category"
                element={<Catagorynew inputs={categoryInputs} title="Add New category" />}
              />
            </Route>
            <Route path="/damagedgood">
              <Route index element={<DamagedGood />} />
              <Route path=":id" element={<Single />} />
              <Route
                path="damaged"
                element={<Adddamaged inputs={damagedInputs} title="Add New Product" />}
              />
            </Route>
            <Route path="/warranty">
              <Route index element={<Warranty />} />
              <Route path=":warrantyId" element={<Single />} />
              <Route
                path="add"
                element={<AddNew  inputs={warantyInputs} title="Add New Product" />}
              />
            </Route>

            <Route path="/financereport">
              <Route index element={<FinanceReport />} />
            </Route>

            <Route path="/sales">
              <Route index element={<Sales />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="add"
                element={<AddNews inputs={saleInputs} title="Add New User" />}
              />
            </Route>

            <Route path="/expense">
              <Route index element={<Expense />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="/asset">
              <Route index element={<Asset />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>

            <Route path="/income">
              <Route index element={<Income />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>

            <Route path="/addemployee">
              <Route index element={<Employ />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="hrnew"
                element={<Hrnew inputs={empInputs} title="New employee" />}
              />
            </Route>
            <Route path="/grade">
              <Route index element={<Grade />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="addgrade"
                element={<Addgrade inputs={gradeInputs} title="New grade" />}
              />
            </Route>
            <Route path="/department">
              <Route index element={<Department />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="addDep"
                element={<AddDep inputs={depInputs} title="New department" />}
              />
            </Route>
            <Route path="/payrol">
              <Route index element={<Payrol />} />
              <Route path=":userId" element={<Single />} />
            </Route>


            <Route path="/liability">
              <Route index element={<Liability />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="/notifications">
              <Route index element={<Notification />} />
            </Route>
            {/*  */}
          <Route exact path='/profile' element={
            <PrivateRoute>
              <Profile/>
            </PrivateRoute>
          }/>
          <Route exact path='/' element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }/>
          <Route path="/login" element={
            !currentUser?.emailVerified 
            ? <Login/>
            : <Navigate to='/' replace/>
          } />
          <Route path="/register" element={
            !currentUser?.emailVerified 
            ? <Register/>
            : <Navigate to='/' replace/>
          } />
          <Route path='/verify-email' element={<VerifyEmail/>} /> 
        </Routes>  
      </AuthProvider>
  </Router>
  </div>
  );
}

export default App;
