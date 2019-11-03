import React from 'react'
import { withRouter } from 'react-router-dom'
import { Breadcrumb, Breadcrumbs } from 'react-rainbow-components'
import { Row } from 'react-flexbox-grid'

function BreadCrumb({
  isCourse = false,
  isUnit = true,
  isTopic = true,
  history,
}) {
  // const links = {
  //   course: '/client/courses',
  //   unit: '/client/units/id',
  //   topic: '/client/units/id/topicId',
  //   resource: '/client/resourceviewer/topicId/resourceId',
  // }

  return (
    <Row>
      <Breadcrumbs
        style={{
          marginTop: 100,
          position: 'relative',
          paddingLeft: 29,
        }}
      >
        <Breadcrumb
          label="Courses"
          onClick={() => history.push('/client/courses')}
          disabled={isCourse}
        />
        <Breadcrumb
          label="Units"
          onClick={() => history.goBack()}
          disabled={isUnit}
        />
        <Breadcrumb
          label="Topics"
          onClick={() => history.goBack()}
          disabled={isTopic}
        />
      </Breadcrumbs>
    </Row>
  )
}

export default withRouter(BreadCrumb)
