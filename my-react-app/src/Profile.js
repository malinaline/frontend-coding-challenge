import './profile.css'
import {useAuthValue} from './AuthContext'
import { signOut } from 'firebase/auth' 
import { auth } from './firebase'
import { Link } from 'react-router-dom'





function Profile() {

  
  const {currentUser} = useAuthValue()



  return (
      <div className='center'>
        <div className=''> 
          <Link to='/Products'>Visa produkter</Link>
          <span onClick={() => signOut(auth)}>Sign Out</span>
        </div>
        </div>
  



  )
}

export default Profile
