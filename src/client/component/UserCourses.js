import React from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Card, Spinner } from 'react-rainbow-components'
import { useQuery } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'
import GET_COURSES from '../queries/courses'
import ErrorPage from '../../core/component/utils/ErrorPage'

function Courses() {
  const { loading, data, error } = useQuery(GET_COURSES)
  if (loading) {
    return (
      <div className="rainbow-p-vertical_xx-large">
        <div className="rainbow-position_relative rainbow-m-vertical_xx-large rainbow-p-vertical_xx-large">
          <Spinner size="large" />
        </div>
      </div>
    )
  }

  if (error) return <ErrorPage />

  return (
    <Row around="md">
      {data.getCourses.map(course => (
        <Col sm={6} xs={12} md={4} lg={4} key={course._id}>
          <Link
            style={{
              textDecoration: 'none',
            }}
            to="/client/course/"
          >
            <Card>
              <div className="rainbow-p-around_xx-large rainbow-align-content_center rainbow-flex_column">
                <h1 className="rainbow-p-top_large rainbow-font-size-heading_small rainbow-color_dark-1">
                  {course.name}
                </h1>
              </div>
            </Card>
          </Link>
          <br />
        </Col>
      ))}
    </Row>
  )
}

export default Courses
