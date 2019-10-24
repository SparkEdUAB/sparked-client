import React from 'react'
import { Card } from 'react-rainbow-components'

export default function NoResults({ name }) {
  return (
    <div className="rainbow-m-around_large ">
      <Card
        title={`${name} page`}
        style={{
          height: '85vh',
        }}
      >
        <div className=" center-page rainbow-p-around_xx-large rainbow-align-content_center rainbow-flex_column">
          <span role="img" aria-label="sad emoji">
            😞
          </span>
          <h1 className="rainbow-p-top_large rainbow-font-size-heading_small rainbow-color_dark-1">
            There are no {name} found yet, contact the admin
          </h1>
        </div>
      </Card>
    </div>
  )
}
