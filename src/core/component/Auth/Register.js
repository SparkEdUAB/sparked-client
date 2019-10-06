import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { Input, Button, RadioButtonGroup } from 'react-rainbow-components'
import { useMutation } from '@apollo/react-hooks'
import RegisterMutation from '../../queries/registerMutation'
import '../../styles/styles.css'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [gender, setGender] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)
  const [register] = useMutation(RegisterMutation)

  const inputStyles = {
    width: 400,
  }
  const options = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
  ]
  // handle errors that could happen during registration
  async function handleRegister() {
    if (!name.length || !email.length || !password.length) {
      setError('You must enter all the fields marked with *')
      return
    }
    setLoading(true)
    setError('')
    try {
      await register({ variables: { name, email, password, gender } })
      setLoading(false)
      setIsRegistered(true)
    } catch (error) {
      setError(error.message)
      setLoading(false)
    }
  }
  if (isRegistered) {
    return <Redirect to="/login" />
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
            label="Name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <Input
            placeholder="Enter your email"
            type="email"
            className="rainbow-p-around_medium"
            style={inputStyles}
            label="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <Input
            placeholder="Enter your password"
            type="password"
            className="rainbow-p-around_medium"
            style={inputStyles}
            label="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />

          <RadioButtonGroup
            id="radio-button-group-component-1"
            options={options}
            value={gender}
            variant="brand"
            onChange={e => setGender(e.target.value)}
            label="Gender"
            required
          />
          <Button
            isLoading={isLoading}
            label="Register"
            variant="brand"
            className="rainbow-m-around_medium"
            onClick={handleRegister}
          />
          <Link to="/login">Login</Link>
          {error ? <p>{error}</p> : null}
        </div>
      </div>
    </div>
  )
}
export default Register
