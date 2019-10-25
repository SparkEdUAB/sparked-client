import React from 'react'

export default function NoResults({ name, additionalText = '' }) {
  return (
    <div className="rainbow-m-around_large ">
      <div className=" center-page rainbow-p-around_xx-large rainbow-align-content_center rainbow-flex_column">
        <span role="img" aria-label="sad emoji">
          😞
        </span>
        <h1 className="rainbow-p-top_large rainbow-font-size-heading_small rainbow-color_dark-1">
          There are no {name} found yet, contact the admin
        </h1>
        <p>{additionalText}</p>
      </div>
    </div>
  )
}
