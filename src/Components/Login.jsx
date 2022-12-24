import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className='login-box'>
    <Link to="/user"><button>USER</button></Link>
    <Link to="/admin"><button>ADMIN</button></Link>
  
    </div>
  )
}

export default Login