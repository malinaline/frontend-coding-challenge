import {useState} from 'react'
import { Link } from 'react-router-dom'
import './forms.css'
import {signInWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
import {auth} from './firebase'
import {useNavigate} from 'react-router-dom'
import {useAuthValue} from './AuthContext'



function Login(){

  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') 
  const [error, setError] = useState('')
  const {setTimeActive} = useAuthValue()
  const navigate = useNavigate()

  
 

  const login = e => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      if(!auth.currentUser.emailVerified) {
        sendEmailVerification(auth.currentUser)
        .then(() => {
          setTimeActive(true)
          navigate('/verify-email')
        })
      .catch(err => alert(err.message))
    }else{
      navigate('/')
    }
    })
    .catch(err => setError(err.message))
  }

  return(
    <div className='center'>
      <div className='auth'>
        <h1>Logga in</h1>
        {error && <div className='auth__error'>{error}</div>}
        <form onSubmit={login} name='login_form'>
          <input 
            type='email' 
            value={email}
            required
            placeholder="Skriv din mejladress"
            onChange={e => setEmail(e.target.value)}/>

          <input 
            type='password'
            value={password}
            required
            placeholder='Skriv ditt lösenord'
            onChange={e => setPassword(e.target.value)}/>

          <button type='submit'>Logga in</button>
        </form>
        <p>Saknar du ett konto?</p>
         <p><Link to='/register'> Skapa ett här</Link></p>
      </div>
    </div>
  )
}

export default Login