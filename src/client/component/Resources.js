import React, { Fragment } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'
import { Spinner, Card } from 'react-rainbow-components'
import { Row, Col } from 'react-flexbox-grid'
import ErrorPage from '../../core/component/utils/ErrorPage'
import GET_RESOURCES from '../../admin/queries/resources.query'
import NoResults from '../../core/component/utils/NoResults'

function ClientResources({ topicId = '1' }) {
  const { loading, data, error } = useQuery(GET_RESOURCES, {
    variables: { topicId },
  })
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
      {data.getResourcesByTopicId.length ? (
        <Row around="md">
          {data.getResourcesByTopicId.map(resource => (
            <Col sm={6} xs={12} md={4} lg={4} key={resource._id}>
              <Link
                style={{
                  textDecoration: 'none',
                }}
                to={`/client/units/${resource._id}`}
              >
                <Card>
                  <div className="rainbow-p-around_xx-large rainbow-align-content_center rainbow-flex_column">
                    <h1 className="rainbow-p-top_large rainbow-font-size-heading_small rainbow-color_dark-1">
                      {resource.filename.replace(/\.[^/.]+$/, '')}
                    </h1>
                  </div>
                </Card>
              </Link>
              <br />
            </Col>
          ))}
        </Row>
      ) : (
        <NoResults
          name="resources"
          additionalText="Or try a different topic 👈 on the left"
        />
      )}
    </Fragment>
  )
}

export default ClientResources
