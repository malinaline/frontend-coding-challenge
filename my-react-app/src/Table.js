import './profile.css'
//import {useAuthValue} from './AuthContext'
import { signOut } from 'firebase/auth' 
import { auth } from './firebase'
import axios from "axios";
import React from "react";
import useAxios from 'axios-hooks'


 

function Table() {

    const [{ data, loading, error }, refetch] = useAxios(
        'https://reqres.in/api/products'
      )

      if (loading) return <p>Loading...</p>
      if (error) return <p>Error!</p>

  //const {currentUser} = useAuthValue()

  return (
      <div className='center'>
        <div className='profile'>
    <div>
      <button onClick={refetch}>refetch</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>

          <span onClick={() => signOut(auth)}>Sign Out</span>
        </div>
      </div>



  )
}

export default Table


