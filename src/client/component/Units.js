import React, { Fragment } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import {
  Card,
  Spinner,
  VerticalSectionOverflow,
  VerticalItem,
  VerticalNavigation,
} from 'react-rainbow-components'
import { useQuery } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import GET_UNITS from '../queries/units.query'
import ErrorPage from '../../core/component/utils/ErrorPage'

function Units({ match }) {
  const courseId = match.params.id
  const { loading, data, error } = useQuery(GET_UNITS, {
    variables: { courseId },
  })
  function handleOnSelect() {}
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
    <Fragment>
      <Helmet>
        <title>My Units</title>
      </Helmet>
      <Col xs={12}>
        <Row start="xs">
          <Col xs={12} md={4} lg={3}>
            <VerticalNavigation
              id="vertical-navigation-11"
              selectedItem={'Introduction'}
              onSelect={handleOnSelect}
            >
              {data.getUnitsByCourseId.map(unit => (
                <VerticalSectionOverflow
                  key={unit._id}
                  label={unit.name}
                  description={`contains topics under ${unit.name}`}
                >
                  {unit.topics.slice().map(topic => (
                    <VerticalItem
                      name="topics"
                      label={topic.name}
                      key={topic._id}
                    />
                  ))}
                </VerticalSectionOverflow>
              ))}
            </VerticalNavigation>
          </Col>
        </Row>
      </Col>
    </Fragment>
  )
}

export default Units
