import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import {
  IoMdNotifications,
  IoMdMenu,
  IoIosLogOut,
  IoIosPerson,
} from 'react-icons/io'
import {
  ButtonIcon,
  AvatarMenu,
  Avatar,
  Input,
  MenuItem,
  MenuDivider,
  ButtonMenu,
} from 'react-rainbow-components'
import { Link } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import USER_INFO from '../queries/user.query'
import '../styles/header.css'

function SectionHeading({ onToogleSidebar, headerTitle = 'SparkEd' }) {
  const { loading, data, error } = useQuery(USER_INFO)

  return (
    <header className="react-rainbow-admin_header rainbow-position_fixed rainbow-flex rainbow-align_center rainbow-p-horizontal_large rainbow-background-color_white">
      <Link style={{ textDecoration: 'none' }} to="/">
        <h3>{headerTitle}</h3>
      </Link>
      <Input
        className="rainbow-m-left_xx-large react-rainbow-admin_header-search"
        placeholder="search"
        label="header search"
        hideLabel
      />
      <section className="rainbow-flex rainbow-align_center react-rainbow-admin_header-actions">
        <ButtonMenu
          className="rainbow-m-horizontal_medium react-rainbow-admin_header-button-notification"
          menuAlignment="right"
          buttonVariant="base"
          buttonSize="large"
          icon={<IoMdNotifications />}
        >
          <MenuItem label="Notifications (2)" variant="header" />
          <MenuItem label="Another thing" variant="header" />
        </ButtonMenu>
        <AvatarMenu
          icon={<IoIosPerson size={'2em'} />}
          assistiveText="Tahimi Leon"
          menuAlignment="right"
          menuSize="small"
          title="Tahimi Leon"
        >
          <li className="rainbow-p-horizontal_small rainbow-align_center rainbow-flex">
            <Avatar
              assistiveText="Tahimi Leon"
              title="Tahimi Leon"
              size="medium"
              icon={<IoIosPerson size={'2em'} />}
            />
            {!loading && !error && data.me ? (
              <div className="rainbow-m-left_x-small">
                <p className="rainbow-font-size-text_medium rainbow-color_dark-1">
                  {data.me.name}
                </p>
                <p className="rainbow-font-size-text_small rainbow-color_gray-3">
                  {data.me.email}
                </p>
                <p>
                  {data.me.role === 'admin' ? (
                    <Link to="/dashboard/">Dashboard</Link>
                  ) : null}
                </p>
              </div>
            ) : null}
          </li>
          <MenuDivider variant="space" />
          <MenuItem
            label="Edit Profile"
            icon={<IoIosPerson />}
            iconPosition="left"
          />
          <MenuItem
            label="Logout"
            icon={<IoIosLogOut />}
            iconPosition="left"
            onClick={() => {
              localStorage.removeItem('token')
              return (window.location.href = '/login')
            }}
          />
        </AvatarMenu>
      </section>
      <ButtonIcon
        onClick={onToogleSidebar}
        className="react-rainbow-admin_header-hamburger-button"
        size="large"
        icon={<IoMdMenu />}
      />
    </header>
  )
}

SectionHeading.propTypes = {
  onToogleSidebar: PropTypes.func,
}

SectionHeading.defaultProps = {
  onToogleSidebar: () => {},
}
export default withRouter(SectionHeading)
