import React, { Fragment } from "react";
import { Sidebar, SidebarItem } from "react-rainbow-components";
import { IoIosPeople, IoMdBook, IoMdApps, IoIosAlbums, IoIosSettings, IoIosPodium } from "react-icons/io";
import { withRouter } from 'react-router-dom'
import Header from '../../core/component/Header'
import "../styles/styles.css";


class AppWrapper extends React.Component {
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
      <Fragment>
        <Header />
        <div className='dash-wrapper'>
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
                onClick={() => this.props.history.push('/admin/overview')}

              />

              <SidebarItem
                icon={<IoIosPeople size={'2em'} />}
                name="Users"
                label="Users"
                onClick={() => this.props.history.push('/admin/users')}

              />
              <SidebarItem
                icon={<IoMdBook size={'2em'} />}
                name="Courses"
                label="Courses"
                onClick={() => this.props.history.push('/admin/courses')}

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
          <div className="main">
            {this.props.children}
          </div>
        </div>
      </Fragment>
    );
  }
}
export default withRouter(AppWrapper)
