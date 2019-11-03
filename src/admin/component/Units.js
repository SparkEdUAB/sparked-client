import React, { useState, Fragment } from 'react'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { Link } from 'react-router-dom'
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
import { IoIosAdd, IoIosRemoveCircleOutline } from 'react-icons/io'
import GET_UNITS, { CREATE_UNIT, DELETE_UNIT } from '../queries/units.query'
import ErrorPage from '../../core/component/utils/ErrorPage'
import '../styles/styles.css'
import { renderPaginatedData } from '../../core/component/utils/utils'

const badgeStyles = { color: '#1de9b6' }

const StatusBadge = ({ value }) => (
  <Badge label={value} variant="lightest" style={badgeStyles} />
)
function UnitsList({ match }) {
  const courseId = match.params.id
  const { loading, data, error } = useQuery(GET_UNITS, {
    variables: { courseId },
  })
  const [createunit] = useMutation(CREATE_UNIT)
  const [deleteunit] = useMutation(DELETE_UNIT)
  const [activePage, setActivePage] = useState(1)
  const [isOpen, setModal] = useState(false)
  const [name, setName] = useState('')
  // const [unitIds, setUnitIds] = useState([])
  const itemsPerPage = 10
  let unitIds = []

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
    if (!unitIds.length) {
      return null
    }
    deleteunit({
      variables: { ids: unitIds },
      refetchQueries: [{ query: GET_UNITS }],
    })
  }

  function handleCreateUnit() {
    createunit({
      variables: { name, courseId },
      refetchQueries: [{ query: GET_UNITS, variables: { courseId } }],
    }).then(() => {
      setName('')
      setModal(false)
    })
  }
  return (
    <Fragment>
      <Helmet>
        <title>{'Admin Units'}</title>
      </Helmet>
      <div className="rainbow-p-bottom_xx-large">
        <Modal id="modal-1" isOpen={isOpen} onRequestClose={handleOnClose}>
          <Input
            label="Unit"
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
            onClick={handleCreateUnit}
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
          <Table
            keyField="_id"
            isLoading={loading}
            data={renderPaginatedData(
              data.getUnitsByCourseId,
              activePage,
              itemsPerPage
            )}
            showCheckboxColumn
            maxRowSelection={itemsPerPage}
            selectedRows={['1234qwerty', '1234zxcvbn']}
            onRowSelection={data => {
              // To avoid an overflow in states, directly mutate the ids
              const ids = data.map(unit => unit._id)
              unitIds = ids
            }}
          >
            <Column
              header="Name"
              field="name"
              component={({ value, row }) => (
                <Link
                  className="react-rainbow-admin-users_user-id-cell-container"
                  to={`/admin/unit/${row._id}`}
                >
                  <div className="react-rainbow-admin-users_user-id-cell rainbow-color_brand">
                    {value}
                  </div>
                </Link>
              )}
            />
            <Column
              header="created At"
              field="createdAt"
              component={StatusBadge}
            />
            <Column header="created By" field="createdByName" />
            <Column type="action">
              <MenuItem
                label="Edit"
                onClick={(e, data) => handleOnClick(data)}
              />
              <MenuItem label="Delete" onClick={handleOnDelete} />
            </Column>
          </Table>
          {(data.getUnitsByCourseId.length < 10) &
          (
            <Pagination
              className="rainbow-m_auto"
              pages={data.getUnitsByCourseId.length / itemsPerPage}
              activePage={activePage}
              onChange={handleOnChange}
            />
          ) || null}
        </div>
      </div>
    </Fragment>
  )
}
export default UnitsList
