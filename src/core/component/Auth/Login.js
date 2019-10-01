import React, { useState } from 'react'
import { Input, Button } from 'react-rainbow-components'
import { useMutation } from '@apollo/react-hooks'
import { Redirect } from 'react-router-dom'
import LoginMutation from '../../queries/loginMutation'
import '../../styles/styles.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [login] = useMutation(LoginMutation)

  const inputStyles = {
    width: 400,
  }
  function handleLogin() {
    setLoading(true)
    login({ variables: { email, password } })
      .then(data => {
        localStorage.setItem('token', data.data.login)
      })
      .then(() => {
        setLoading(false)
        setIsLoggedIn(true)
      })
  }
  if (isLoggedIn) {
    return <Redirect to="/" />
  }
  return (
    <div className="register-page">
      <div className="rainbow-m-vertical_x-large rainbow-m_auto">
        <div className="rainbow-align-content_center rainbow-flex_wrap">
          <Input
            placeholder="Enter your name"
            type="text"
            className="rainbow-p-around_medium"
            style={inputStyles}
            label="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <Input
            placeholder="Enter your password"
            type="password"
            className="rainbow-p-around_medium"
            style={inputStyles}
            label="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Button
            isLoading={isLoading}
            label="Login"
            variant="brand"
            className="rainbow-m-around_medium"
            onClick={handleLogin}
          />
        </div>
      </div>
    </div>
  )
}
export default Login
