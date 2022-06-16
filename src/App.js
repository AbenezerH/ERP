// import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
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
import Expense from "./pages/expense/Expense";
import ExpenseCategory from "./pages/expenseCategory/ExpenseCategory";
import Income from "./pages/income/Income";
import IncomeCategory from "./pages/incomeCategory/IncomeCategory"
import BrandCategory from "./pages/brandCategory/BrandCategory";
import MeasurementCategory from "./pages/measurementCategory/MeasurementCategory";
import Color from "./pages/color/Color";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./formSource";
import { DarkModeContext } from "./context/darkModeContext";
import { useContext } from "react";
import "./style/dark.scss";
import Warranty from './pages/color/Warranty';
import Notification from './pages/notifications/Notification';

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
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="/products">
              <Route index element={<Products />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
            <Route path="/brandCategory">
              <Route index element={<BrandCategory />} />
              <Route path=":brandCategoryId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
            <Route path="/measurementCategory">
              <Route index element={<MeasurementCategory />} />
              <Route path=":measurementCategoryId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
            <Route path="/warranty">
              <Route index element={<Warranty />} />
              <Route path=":warrantyId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>

            <Route path="/financereport">
              <Route index element={<FinanceReport />} />
            </Route>

            <Route path="/sales">
              <Route index element={<Sales />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
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
            <Route path="/expenseCategory">
              <Route index element={<ExpenseCategory />} />
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

            <Route path="/hr">
              <Route index element={<Hr />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="hrnew"
                element={<New inputs={gradeInputs} title="Add New grade" />}
              />
            </Route>

            <Route path="/incomeCategory">
              <Route index element={<IncomeCategory />} />
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
