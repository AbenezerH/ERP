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

function App() {

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
    <Router>
      <AuthProvider value={{currentUser, loading, timeActive, setTimeActive}}>
        <Routes>
          
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
  );
}

export default App;
