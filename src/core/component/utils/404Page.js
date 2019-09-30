import React from 'react'
import { Link } from 'react-router-dom'

export default function Page404() {
  return (
    <div className="rainbow-m-around_large ">
      <div className=" center-page rainbow-p-around_xx-large rainbow-align-content_center rainbow-flex_column">
        <span role="img" style={{ fontSize: '10em' }} aria-label="sad emoji">
          🥺
        </span>
        <h1 className="rainbow-p-top_large rainbow-font-size-heading_small rainbow-color_dark-1">
          Sorry we couldn't find that page, visit the home page{' '}
          <Link to="/">Here</Link>
        </h1>
      </div>
    </div>
  )
}
