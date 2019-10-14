import React, { useState } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { Input, Button, RadioButtonGroup } from 'react-rainbow-components'
import { useMutation } from '@apollo/react-hooks'
import { useToasts } from 'react-toast-notifications'
import { useTranslation } from 'react-i18next'
import RegisterMutation from '../../queries/registerMutation'
import '../../styles/styles.css'

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [gender, setGender] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)
  const [register] = useMutation(RegisterMutation)
  const { addToast } = useToasts()
  const { t } = useTranslation()

  const inputStyles = {
    width: 400,
  }
  const options = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
  ]
  async function handleRegister() {
    if (!name.length || !email.length || !password.length) {
      addToast('You must enter all the fields marked with *', {
        appearance: 'error',
        autoDismiss: true,
      })
      return
    }
    setLoading(true)
    try {
      await register({ variables: { name, email, password, gender } })
      setLoading(false)
      setIsRegistered(true)
      addToast('Successfully Registered', {
        appearance: 'success',
        autoDismiss: true,
      })
    } catch (error) {
      addToast(error.message, {
        appearance: 'error',
        autoDismiss: true,
      })
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
            placeholder={t('auth.name_p')}
            type="text"
            className="rainbow-p-around_medium"
            style={inputStyles}
            label={t('auth.name_l')}
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <Input
            placeholder={t('auth.email_p')}
            type="email"
            className="rainbow-p-around_medium"
            style={inputStyles}
            label={t('auth.email_l')}
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <Input
            placeholder={t('auth.password_p')}
            type="password"
            className="rainbow-p-around_medium"
            style={inputStyles}
            label={t('auth.password_l')}
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
        </div>
      </div>
    </div>
  )
}
export default Register
