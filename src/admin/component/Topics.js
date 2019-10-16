import React, { useState } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'
import {
  Pagination,
  Spinner,
  Table,
  Column,
  MenuItem,
  Badge,
  Modal,
  Input,
  Button,
} from 'react-rainbow-components'
import { IoIosAdd, IoIosRemoveCircleOutline } from 'react-icons/io'
import GET_TOPICS, { CREATE_TOPIC, DELETE_TOPIC } from '../queries/topics.query'
import ErrorPage from '../../core/component/utils/ErrorPage'
import '../styles/styles.css'

const badgeStyles = { color: '#1de9b6' }

const StatusBadge = ({ value }) => (
  <Badge label={value} variant="lightest" style={badgeStyles} />
)
function TopicsList() {
  const { loading, data, error } = useQuery(GET_TOPICS)
  const [createtopic] = useMutation(CREATE_TOPIC)
  const [deletetopic] = useMutation(DELETE_TOPIC)
  const [activePage, setActivePage] = useState(1)
  const [isOpen, setModal] = useState(false)
  const [name, setName] = useState('')
  // const [topicIds, setTopicIds] = useState([])
  const itemsPerPage = 10
  let topicIds = []

  function handleOnChange(event, page) {
    setActivePage(page)
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

  function handleOnClick(data) {
    setModal(true)
    setName(data.name)
  }
  function handleOnClose() {
    setModal(false)
  }
  function handleOnDelete() {
    if (!topicIds.length) {
      return null
    }
    deletetopic({
      variables: { ids: topicIds },
      refetchQueries: [{ query: GET_TOPICS }],
    })
  }

  function handleCreateTopic() {
    createtopic({
      variables: { name },
      refetchQueries: [{ query: GET_TOPICS }],
    }).then(() => {
      setName('')
      setModal(false)
    })
  }
  return (
    <div className="rainbow-p-bottom_xx-large">
      <Modal id="modal-1" isOpen={isOpen} onRequestClose={handleOnClose}>
        <Input
          label="Topic"
          placeholder="Enter your name"
          type="text"
          className="rainbow-p-around_medium"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <Button
          isLoading={false}
          label={name.length ? 'update' : 'add'}
          variant="outline-brand"
          className="rainbow-m-around_medium"
          onClick={handleCreateTopic}
        />
      </Modal>
      <div>
        <Button
          variant="neutral"
          className="rainbow-m-around_medium"
          onClick={() => setModal(true)}
        >
          New
          <IoIosAdd size={'2em'} />
        </Button>
        <Button
          variant="neutral"
          className="rainbow-m-around_medium"
          onClick={handleOnDelete}
        >
          Delete
          <IoIosRemoveCircleOutline size={'2em'} />
        </Button>
      </div>
    </div>
  )
}
export default TopicsList
