import React, { useState, Fragment } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { Helmet } from 'react-helmet'
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
import { IoIosRemoveCircleOutline } from 'react-icons/io'
import { MdEdit } from 'react-icons/md'

import GET_USERS, { UPDATE_USER, DELETE_USERS } from '../queries/users.query'
import ErrorPage from '../../core/component/utils/ErrorPage'
import '../styles/styles.css'

const badgeStyles = { color: '#1de9b6' }

const StatusBadge = ({ value }) => (
  <Badge label={value} variant="lightest" style={badgeStyles} />
)
function UsersList() {
  const { loading, data, error } = useQuery(GET_USERS)
  const [updateUser] = useMutation(UPDATE_USER)
  const [deleteUser] = useMutation(DELETE_USERS)
  const [activePage, setActivePage] = useState(1)
  const [isOpen, setModal] = useState(false)
  const [name, setName] = useState('')
  const [_error, setError] = useState('')
  const itemsPerPage = 10
  let userIds = []

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
    if (!userIds.length) {
      setError('Check at least one user')
      return null
    }

    deleteUser({
      variables: { ids: userIds },
      refetchQueries: [{ query: GET_USERS }],
    })
      .then(_data => {
        console.log(_data)
      })
      .catch(error => {
        setError(error.message)
      })
  }

  function handleUpdateUser() {
    updateUser({
      variables: { name },
      refetchQueries: [{ query: GET_USERS }],
    }).then(() => {
      setName('')
      setModal(false)
    })
  }
  return (
    <Fragment>
      <Helmet>
        <title>Users</title>
      </Helmet>
      <div className="rainbow-p-bottom_xx-large">
        <Modal id="modal-1" isOpen={isOpen} onRequestClose={handleOnClose}>
          <Input
            label="User"
            placeholder="Enter your name"
            type="text"
            className="rainbow-p-around_medium"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Button
            isLoading={false}
            label={'update'}
            variant="outline-brand"
            className="rainbow-m-around_medium"
            onClick={handleUpdateUser}
          />
        </Modal>

        <div>
          <Button variant="neutral" className="rainbow-m-around_medium">
            Change Role
            <MdEdit size={'1em'} />
          </Button>
          <Button
            variant="neutral"
            className="rainbow-m-around_medium"
            onClick={handleOnDelete}
          >
            Delete
            <IoIosRemoveCircleOutline size={'2em'} />
          </Button>
          {_error ? (
            <p style={{ fontSize: 14, color: 'red' }}>{_error}</p>
          ) : null}

          <Table
            keyField="_id"
            isLoading={loading}
            data={renderPaginatedData(data.allUsers, activePage, itemsPerPage)}
            showCheckboxColumn
            maxRowSelection={itemsPerPage}
            selectedRows={['1234qwerty', '1234zxcvbn']}
            onRowSelection={data => {
              // To avoid an overflow in states, directly mutate the ids
              console.log(data)
              const ids = data.map(user => user._id)
              userIds = ids
            }}
          >
            <Column header="Name" field="name" />
            <Column header="Email" field="email" />
            <Column header="Gender" field="gender" />
            <Column header="Role" field="role" component={StatusBadge} />
            <Column type="action">
              <MenuItem
                label="Edit"
                onClick={(e, data) => handleOnClick(data)}
              />
              <MenuItem label="Delete" onClick={handleOnDelete} />
            </Column>
          </Table>
          {(data.allUsers.length < itemsPerPage) &
          (
            <Pagination
              className="rainbow-m_auto"
              pages={data.allUsers.length / itemsPerPage}
              activePage={activePage}
              onChange={handleOnChange}
            />
          ) || null}
        </div>
      </div>
    </Fragment>
  )
}

function renderPaginatedData(data, activePage, itemsPerPage) {
  const lastItem = activePage * itemsPerPage
  const firstItem = lastItem - itemsPerPage
  return data.slice(firstItem, lastItem)
}
export default UsersList
