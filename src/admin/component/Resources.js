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
import { TiUpload } from 'react-icons/ti'
import GET_FILES from '../queries/resources.query'
import ErrorPage from '../../core/component/utils/ErrorPage'
import '../styles/styles.css'
import { renderPaginatedData } from '../../core/component/utils/utils'
import FileUploads from '../../client/component/Uploads'

const badgeStyles = { color: '#1de9b6' }

const StatusBadge = ({ value }) => (
  <Badge label={value} variant="lightest" style={badgeStyles} />
)
function ResourceList({ match }) {
  const topicId = match.params.id

  const courseId = '5db0b29b4cd2038881beab0e'
  const { loading, data, error } = useQuery(GET_FILES, {
    variables: { topicId },
  })
  //   const [createtopic] = useMutation(CREATE_TOPIC)
  //   const [deletetopic] = useMutation(DELETE_TOPIC)
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
    // deletetopic({
    //   variables: { ids: topicIds },
    //   refetchQueries: [{ query: GET_TOPICS }],
    // })
  }

  //   function handleCreateTopic() {
  //     createtopic({
  //       variables: { name, topicId, courseId },
  //       refetchQueries: [{ query: GET_TOPICS, variables: { topicId, courseId } }],
  //     }).then(() => {
  //       setName('')
  //       setModal(false)
  //     })
  //   }

  return (
    <div className="rainbow-p-bottom_xx-large">
      <Modal id="modal-1" isOpen={isOpen} onRequestClose={handleOnClose}>
        <FileUploads />
      </Modal>
      <div>
        <Button
          variant="neutral"
          className="rainbow-m-around_medium"
          onClick={() => setModal(true)}
        >
          Upload New
          <TiUpload size={'1.5em'} />
        </Button>
        <Button
          variant="neutral"
          className="rainbow-m-around_medium"
          onClick={handleOnDelete}
        >
          Delete
          <IoIosRemoveCircleOutline size={'2em'} />
        </Button>

        <Table
          keyField="_id"
          isLoading={loading}
          data={renderPaginatedData(data.getFiles, activePage, itemsPerPage)}
          showCheckboxColumn
          maxRowSelection={itemsPerPage}
          selectedRows={['1234qwerty', '1234zxcvbn']}
          onRowSelection={data => {
            // To avoid an overflow in states, directly mutate the ids
            const ids = data.map(unit => unit._id)
            topicIds = ids
          }}
        >
          <Column
            header="Name"
            field="filename"
            component={({ value, row }) => (
              <Link
                className="react-rainbow-admin-users_user-id-cell-container"
                to={`/admin/topic/${row._id}`}
              >
                <div className="react-rainbow-admin-users_user-id-cell rainbow-color_brand">
                  {value.replace(/\.[^/.]+$/, '')}
                </div>
              </Link>
            )}
          />
          <Column
            header="created At"
            field="createdAt"
            component={StatusBadge}
          />
          <Column header="Uploaded By" field="createdBy" />
          <Column type="action">
            <MenuItem label="Edit" onClick={(e, data) => handleOnClick(data)} />
            <MenuItem label="Delete" onClick={handleOnDelete} />
          </Column>
        </Table>
        {(data.getFiles.length < 10) &
        (
          <Pagination
            className="rainbow-m_auto"
            pages={data.getFiles.length / itemsPerPage}
            activePage={activePage}
            onChange={handleOnChange}
          />
        ) || null}
      </div>
    </div>
  )
}
export default ResourceList
