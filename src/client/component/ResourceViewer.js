import React, { Fragment } from 'react'
import { Row, Col } from 'react-flexbox-grid'
import { Helmet } from 'react-helmet'
import { useQuery } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'
import { Player } from 'video-react'
import { Spinner, Card } from 'react-rainbow-components'
import ErrorPage from '../../core/component/utils/ErrorPage'
import GET_RESOURCES, {
  GET_RESOURCE,
} from '../../admin/queries/resources.query'
import NoResults from '../../core/component/utils/NoResults'
import 'video-react/dist/video-react.css'

function ResourceViewer({ match }) {
  const topicId = match.params.topicId
  const resourceId = match.params.resourceId
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
      <Helmet>
        <title>ResourceViewer</title>
      </Helmet>
      <Row>
        <Col xs={12} sm={12} md={8} lg={9}>
          <ResourceFile id={resourceId} />
        </Col>

        <Col xs={12} sm={12} md={4} lg={3}>
          {data.getResourcesByTopicId.length ? (
            <Row around="md">
              {data.getResourcesByTopicId.map(resource => (
                <Fragment key={resource._id}>
                  <Col xs={12}>
                    <Link
                      style={{
                        textDecoration: 'none',
                      }}
                      to={`/client/resourceviewer/${topicId}/${resource._id}`}
                    >
                      <Card>
                        <div className="rainbow-p-around_xx-large rainbow-align-content_center rainbow-flex_column">
                          <h1 className="rainbow-p-top_large rainbow-font-size-heading_small rainbow-color_dark-1">
                            {truncateString(
                              resource.filename.replace(/\.[^/.]+$/, '')
                            )}
                          </h1>
                        </div>
                      </Card>
                    </Link>
                    <br />
                    <br />
                  </Col>
                </Fragment>
              ))}
            </Row>
          ) : (
            <Row around="xs">
              <NoResults
                name="resources"
                additionalText="Or try a different topic 👈 on the left"
              />
            </Row>
          )}
        </Col>
      </Row>
    </Fragment>
  )
}

export function ResourceFile({ id = 1 }) {
  const { loading, data, error } = useQuery(GET_RESOURCE, {
    variables: { id },
  })
  if (loading) {
    console.log(loading)
    return loading
  }
  if (error) {
    console.log(error)
    return error.message
  }
  console.log(data)

  return (
    <Fragment>
      {data.type === 'image/png' ? (
        <img
          src={`${process.env.REACT_APP_SERVER_ADDRESS}/${data.getResource.path}`}
          alt={data.getResource.filename}
        />
      ) : data.type === 'video/quicktime' ? (
        <Player>
          <source
            src={`${process.env.REACT_APP_SERVER_ADDRESS}/${data.getResource.path}`}
          />
        </Player>
      ) : (
        <object
          data={`${process.env.REACT_APP_SERVER_ADDRESS}/${data.getResource.path}`}
          type="application/pdf"
          width="100%"
          height="100%"
          aria-label={data.filename}
        />
      )}
    </Fragment>
  )
}

function truncateString(txt, length = 30, ending = '...') {
  if (!txt.length) return
  //   const lowerText = txt.toLowerCase()
  return txt.substring(0, length - ending.length) + ending
}
export default ResourceViewer
