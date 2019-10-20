import React, { useState, Fragment } from 'react'
import { Input, Button } from 'react-rainbow-components'
import { useMutation } from '@apollo/react-hooks'
import { Redirect, Link } from 'react-router-dom'
import { useToasts } from 'react-toast-notifications'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet'
import LoginMutation from '../../queries/login.mutation'
import '../../styles/styles.css'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [login] = useMutation(LoginMutation)
  const { addToast } = useToasts()
  const { t } = useTranslation()
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
        addToast('Successfully Logged in', {
          appearance: 'success',
          autoDismiss: true,
        })
      })
      .catch(error => {
        addToast(error.message, {
          appearance: 'error',
          autoDismiss: true,
        })
        setLoading(false)
      })
  }
  if (isLoggedIn) {
    return <Redirect to="/client/courses" />
  }
  if (localStorage.getItem('token')) {
    return <Redirect to="/client/courses" />
  }
  return (
    <Fragment>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="register-page">
        <div className="rainbow-m-vertical_x-large rainbow-m_auto">
          <div className="rainbow-align-content_center rainbow-flex_wrap">
            <Input
              placeholder={t('auth.email_p')}
              type="text"
              className="rainbow-p-around_medium"
              style={inputStyles}
              label={t('auth.email_l')}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <Input
              placeholder={t('auth.password_p')}
              type="password"
              className="rainbow-p-around_medium"
              style={inputStyles}
              label={t('auth.password_l')}
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              isLoading={isLoading}
              label={t('auth.login')}
              variant="brand"
              className="rainbow-m-around_medium"
              onClick={handleLogin}
            />
            <Link to="/register">{t('auth.register')}</Link>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default Login
