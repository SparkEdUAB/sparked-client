import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Card } from 'react-rainbow-components'

function Courses() {
  return (
    <Row around="xs">
      <Col sm={6} xs={12} md={4} lg={4}>
        <Card>
          <div className="rainbow-p-around_xx-large rainbow-align-content_center rainbow-flex_column">
            <h1 className="rainbow-p-top_large rainbow-font-size-heading_small rainbow-color_dark-1">
              Helloo Courses
            </h1>
          </div>
        </Card>
      </Col>
      <Col sm={6} xs={12} md={4} lg={4}>
        <Card>
          <div className="rainbow-p-around_xx-large rainbow-align-content_center rainbow-flex_column">
            <h1 className="rainbow-p-top_large rainbow-font-size-heading_small rainbow-color_dark-1">
              Helloo Courses
            </h1>
          </div>
        </Card>
      </Col>
      <Col sm={6} xs={12} md={4} lg={4}>
        <Card>
          <div className="rainbow-p-around_xx-large rainbow-align-content_center rainbow-flex_column">
            <h1 className="rainbow-p-top_large rainbow-font-size-heading_small rainbow-color_dark-1">
              Helloo Courses
            </h1>
          </div>
        </Card>
      </Col>
      <br />
      <Col sm={6} xs={12} md={4} lg={4}>
        <Card>
          <div className="rainbow-p-around_xx-large rainbow-align-content_center rainbow-flex_column">
            <h1 className="rainbow-p-top_large rainbow-font-size-heading_small rainbow-color_dark-1">
              Helloo Courses
            </h1>
          </div>
        </Card>
      </Col>
    </Row>
  )
}

export default Courses
