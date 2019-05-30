import React, { Component, Fragment } from "react";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";

class Dashboard extends Component {
  render() {
    return (
      <Fragment>
        <div className="dashboard container">
          <div className="row">
            <div className="col s12 m6">
              <ProjectList />
            </div>
            <div className="col s12 m5 offset-m1">
              <Notifications />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Dashboard;
