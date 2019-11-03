import React, { Fragment } from 'react'
import { useQuery } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'
import { Spinner, Card } from 'react-rainbow-components'
import { Row, Col } from 'react-flexbox-grid'
import ErrorPage from '../../core/component/utils/ErrorPage'
import GET_RESOURCES from '../../admin/queries/resources.query'
import NoResults from '../../core/component/utils/NoResults'
import { GiOpenBook } from 'react-icons/gi'
import { MdOndemandVideo } from 'react-icons/md'
import { FaImage } from 'react-icons/fa'
import { FiFileText } from 'react-icons/fi'

const resourceType = {
  'application/pdf': <GiOpenBook size={'2em'} />,
  'video/mp4': <MdOndemandVideo size={'2em'} />,
  'image/jpeg': <FaImage size={'2em'} />,
  'text/plain': <FiFileText size={'2em'} />,
}

function ClientResources({ topicId = '1' }) {
  const { loading, data, error } = useQuery(GET_RESOURCES, {
    variables: { topicId },
  })
  console.log(data)
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
                to={`/client/resourceviewer/${topicId}/${resource._id}`}
              >
                <Card icon={resourceType[resource.type]}>
                  <div className="rainbow-p-around_xx-large rainbow-align-content_center rainbow-flex_column">
                    {resource.type.includes('image') ? (
                      <img
                        src={`${process.env.REACT_APP_SERVER_ADDRESS}/${resource.path}`}
                        style={{
                          width: 300,
                        }}
                        alt="resource"
                      />
                    ) : null}
                    <br />
                    <h1 className="">
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
        <Row around="xs">
          <NoResults
            name="resources"
            additionalText="Or try a different topic 👈 on the left"
          />
        </Row>
      )}
    </Fragment>
  )
}

export default ClientResources
