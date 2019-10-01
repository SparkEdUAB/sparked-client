import React, { useState } from 'react'
import { Input, Button, CheckboxToggle } from 'react-rainbow-components'
import { useMutation } from '@apollo/react-hooks'
import RegisterMutation from '../../queries/register'
import '../../styles/styles.css'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [gender, setGender] = useState(false)
  const [isLoading, setLoading] = useState(false)
  const [register, { data }] = useMutation(RegisterMutation)

  const inputStyles = {
    width: 400,
  }
  async function handleRegister() {
    setLoading(true)
    await register({ variables: { name, email, password, gender } })
    setLoading(false)
    console.log(data)
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
          />
          <Input
            placeholder="Enter your email"
            type="email"
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

          <CheckboxToggle
            id="checkbox-toggle-component-1"
            label="Male Female"
            value={gender}
            onChange={() => setGender(gender ? 'male' : 'female')}
          />
          <Button
            isLoading={isLoading}
            label="Register"
            variant="brand"
            className="rainbow-m-around_medium"
            onClick={handleRegister}
          />
        </div>
      </div>
    </div>
  )
}
export default Register
