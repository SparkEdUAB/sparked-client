import React from "react";
import { Sidebar, SidebarItem } from "react-rainbow-components";
import { IoIosPeople, IoMdBook, IoMdApps, IoIosAlbums, IoIosSettings, IoIosPodium } from "react-icons/io";

import dashboard from "../assets/dashboard.svg";
import Header from '../../core/component/Header'
import "../styles/styles.css";

const sidebarContainerStyles = {
  width: "88px",
  borderBottomLeftRadius: "0.875rem"
};

class SimpleSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: "GettingStarted"
    };
    this.handleOnSelect = this.handleOnSelect.bind(this);
  }

  handleOnSelect(e, selectedItem) {
    return this.setState({ selectedItem });
  }

  render() {
    const { selectedItem } = this.state;

    return (
      <div className="">
          <Header />
        <div className="sidenav">
          <Sidebar
            selectedItem={selectedItem}
            onSelect={this.handleOnSelect}
            id="sidebar-1"
          >
            <SidebarItem
              icon={<IoMdApps size={'2em'} />}
              name="Dashboard"
              label="Dashboard"
            />
            
            <SidebarItem
                icon={<IoIosPeople size={'2em'} />}
              name="Users"
              label="Users"
            />
            <SidebarItem
                icon={<IoMdBook size={'2em'} />}
                name="Courses"
                label="Courses"
                />
            <SidebarItem
                icon={<IoIosAlbums size={'2em'} />}
                name="References"
                label="References"
                />
            <SidebarItem
                icon={<IoIosSettings size={'2em'} />}
                name="Settings"
                label="Settings"
                />
            <SidebarItem name="Charts" label="Charts"
                icon={<IoIosPodium size={'2em'} />}
             />
          </Sidebar>
        </div>
        <div className="main">Main</div>
      </div>
    );
  }
}
export default SimpleSidebar;
