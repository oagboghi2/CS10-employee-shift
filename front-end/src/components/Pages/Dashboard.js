import React, { Component } from "react";
import { connect } from "react-redux";
import AssignedShift from "../Organisms/AssignedShift.js";
import TimeOffApproved from "../Organisms/TimeOffApproved.js";
import TimeOffRequests from "../Organisms/TimeOffRequests.js";

import {
  DashboardContainer,
  HorizontalContainer,
  DashboardHeader,
  Welcome,
} from "../../styles/Dashboard.js";

class Dashboard extends Component {
  render() {
    return (
      <DashboardContainer>
        <DashboardHeader>
          <Welcome>
            {`Welcome,
            ${this.props.first_name}
            ${this.props.last_name}`}
          </Welcome>
        </DashboardHeader>
        <HorizontalContainer>
          <AssignedShift />
          <TimeOffApproved />
          <TimeOffRequests id={this.props.id} />
        </HorizontalContainer>
      </DashboardContainer>
    );
  }
}

const mapStateToProps = state => {
  const userProfile = state.user.currentUser;
  //TODO: check for empty profile - error
  return {
    first_name: userProfile.user.first_name,
    last_name: userProfile.user.last_name,
    id: state.user.currentUser.user.id,
  };
};

export default connect(mapStateToProps)(Dashboard);
