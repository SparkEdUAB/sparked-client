import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/landing.css'

function Landing() {
  return (
    <>
      <div className="bg"></div>
      <div className="flex-container" id="flex-container">
        <Link to="/admin/overview">Dashboard</Link>
      </div>
    </>
  )
}
export default Landing
