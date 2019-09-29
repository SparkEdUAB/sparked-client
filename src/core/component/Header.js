import React from "react";
import PropTypes from "prop-types";
import { IoMdNotifications, IoMdMenu } from "react-icons/io";
import ButtonIcon from "react-rainbow-components/components/ButtonIcon";
import AvatarMenu from "react-rainbow-components/components/AvatarMenu";
import Avatar from "react-rainbow-components/components/Avatar";
import Input from "react-rainbow-components/components/Input";
import MenuItem from "react-rainbow-components/components/MenuItem";
import MenuDivider from "react-rainbow-components/components/MenuDivider";
import ButtonMenu from "react-rainbow-components/components/ButtonMenu";
import "../styles/header.css";

export default function SectionHeading({ onToogleSidebar }) {
  return (
    <header className="react-rainbow-admin_header rainbow-position_fixed rainbow-flex rainbow-align_center rainbow-p-horizontal_large rainbow-background-color_white">
      <h3>SparkEd</h3>
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
          {/* <MenuItem
            icon={
              <IconNotification
                icon={
                  <ShoppingCartIcon className="react-rainbow-admin_header--notification-icon" />
                }
              />
            }
            label={<Notification title="Your order is placed" />}
          />
          */}
          {/* <MenuItem
            icon={
              <IconNotification
                icon={
                  <MessageIcon className="react-rainbow-admin_header--notification-icon" />
                }
              />
            }
            label={<Notification title="New messages" />}
          />  */}
        </ButtonMenu>
        <AvatarMenu
          src="/assets/images/user2.jpg"
          assistiveText="Tahimi Leon"
          menuAlignment="right"
          menuSize="small"
          title="Tahimi Leon"
        >
          <li className="rainbow-p-horizontal_small rainbow-align_center rainbow-flex">
            <Avatar
              src="/assets/images/user2.jpg"
              assistiveText="Tahimi Leon"
              title="Tahimi Leon"
              size="medium"
            />
            <div className="rainbow-m-left_x-small">
              <p className="rainbow-font-size-text_medium rainbow-color_dark-1">
                Tahimi
              </p>
              <p className="rainbow-font-size-text_small rainbow-color_gray-3">
                janedoe@gmail.com
              </p>
            </div>
          </li>
          <MenuDivider variant="space" />
          <MenuItem
            label="Edit Profile"
            // icon={<FontAwesomeIcon icon={faPencilAlt} />}
            iconPosition="left"
          />
          <MenuItem
            label="Logout"
            // icon={<FontAwesomeIcon icon={faPowerOff} />}
            iconPosition="left"
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
  );
}

SectionHeading.propTypes = {
  onToogleSidebar: PropTypes.func
};

SectionHeading.defaultProps = {
  onToogleSidebar: () => {}
};
