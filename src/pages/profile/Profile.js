import styles from './Profile.module.scss'
import {useAuthValue} from '../../AuthContext'
import { signOut } from 'firebase/auth' 
import { auth } from '../../firebase'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"


function Profile() {
  const {currentUser} = useAuthValue()

  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
      <div className={styles.center}>
        <div className={styles.profile}>
          <h1>Profile</h1>
          <p><strong>Email: </strong>{currentUser?.email}</p>
          <p>
            <strong>Email verified: </strong>
            {`${currentUser?.emailVerified}`}
          </p>
          <span onClick={() => signOut(auth)}>Sign Out</span>
        </div>
      </div>
      </div>
      </div>
  )
}

export default Profile
