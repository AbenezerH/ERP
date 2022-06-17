import React, {useContext} from 'react'
import Loading from "./pages/loading/loading";
const AuthContext = React.createContext();

export function AuthProvider({children, value}) {
  return (
    <AuthContext.Provider value={value}>
      {value.loading ?
          <Loading/>
      :children}
    </AuthContext.Provider>
  )
}

export function useAuthValue(){
  return useContext(AuthContext)
}
