import React from 'react'
import { Link } from 'react-router-dom'
import notfound from '../../assets/empty.svg'

export default function Page404() {
  return (
    <div className="rainbow-m-around_large ">
      <div className=" center-page rainbow-p-around_xx-large rainbow-align-content_center rainbow-flex_column">
        <img src={notfound} alt="not found page" />
        <h1 className="rainbow-p-top_large rainbow-font-size-heading_small rainbow-color_dark-1">
          Sorry we couldn't find that page, visit the home page{' '}
          <Link to="/">Here</Link>
        </h1>
      </div>
    </div>
  )
}
