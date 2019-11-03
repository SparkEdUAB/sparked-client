import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { ProgressIndicator, ProgressStep } from 'react-rainbow-components'
import { Row } from 'react-flexbox-grid'

function BreadCrumb({ history, location }) {
  const [step, setStep] = useState('course')
  function handleOnClick(event, step) {
    setStep(step)
    history.push(links[step])
  }

  const links = {
    course: '/client/courses',
    unit: '/client/units/id',
    topic: '/client/units/id/topicId',
    resource: '/client/resourceviewer/topicId/resourceId',
  }

  return (
    <Row>
      <ProgressIndicator
        currentStepName={step}
        onClick={handleOnClick}
        style={{
          marginBottom: -100,
          position: 'relative',
        }}
      >
        <ProgressStep name="course" label="Courses" />
        <ProgressStep name="unit" label="Units" />
        <ProgressStep name="topic" label="Resources" />
        <ProgressStep name="resource" label="Resource Viewer" />
      </ProgressIndicator>
    </Row>
  )
}

export default withRouter(BreadCrumb)
