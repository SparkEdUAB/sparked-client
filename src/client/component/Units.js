import React, { Fragment, useState } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import {
  Spinner,
  VerticalSectionOverflow,
  VerticalItem,
  VerticalNavigation,
} from 'react-rainbow-components'
import { useQuery } from '@apollo/react-hooks'
import { Helmet } from 'react-helmet'
import GET_UNITS from '../queries/units.query'
import ErrorPage from '../../core/component/utils/ErrorPage'

function Units({ match, history }) {
  const courseId = match.params.id
  const { loading, data, error } = useQuery(GET_UNITS, {
    variables: { courseId },
  })
  const [selectedItem, setSelectedItem] = useState('')
  function handleOnSelect(e, selectedItem) {
    console.log(selectedItem)
    setSelectedItem(selectedItem)
  }
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
      <Row>
        <Col xs={12}>
          <Row center="xs">
            <Col xs={6}>
              <h4>{'Course Name'}</h4>
            </Col>
          </Row>
        </Col>
      </Row>

      <Col xs={12}>
        <Row start="xs">
          <Col xs={12} md={4} lg={3}>
            <VerticalNavigation
              id="vertical-navigation-11"
              selectedItem={selectedItem}
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
                      name={topic.name}
                      label={topic.name}
                      key={topic._id}
                      onClick={() =>
                        history.push(`/client/units/${courseId}/${topic._id}`)
                      }
                    />
                  ))}
                </VerticalSectionOverflow>
              ))}
            </VerticalNavigation>
          </Col>
          <Col xs={12} md={8} lg={9}>
            Resources
          </Col>
        </Row>
      </Col>
    </Fragment>
  )
}

export default Units
