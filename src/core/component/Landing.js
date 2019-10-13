import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/landing.css'
import { useQuery } from '@apollo/react-hooks'
import USER_INFO from '../queries/userInfoQuery'

// Todo: Handle the errors and loading properly
function Landing() {
  const { loading, data, error } = useQuery(USER_INFO)
  if (loading) {
    return 'loading'
  }
  if (error) {
    return 'error'
  }
  return (
    <>
      <div className="bg"></div>
      <div className="flex-container">
        {data && data.me.role === 'admin' ? (
          <Link to="/admin/overview">Dashboard</Link>
        ) : (
          <Link to="/client/courses">Courses</Link>
        )}
      </div>
    </>
  )
}
export default Landing
