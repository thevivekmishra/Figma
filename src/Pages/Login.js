import React from 'react'
import Template from '../components/Template'

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
        formType="login"
        setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login