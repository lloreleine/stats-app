import React, { Component } from 'react';
import { Link } from "react-router-dom";
import dashboardActions from '../store/actions';
import getStats from '../store/selectors';
import { connect } from 'react-redux';
import '../App.css';

class Dashboard extends Component {
  render() {
    return (
      <div className="mobile-container">
        <div className="dash-line-top">
          <div className="stats">{this.props.statTopLabel}</div>
          <div className="arrow arrow-up"></div>
        </div>
        <div className="dash-line-middle">
          <div className="stats">{this.props.statLeftLabel}</div>
          <div className="arrow arrow-left"></div>
          <Link to='/config' style={{ textDecoration: 'none' }}>
            <div className="circle">
              Configure
            </div>
          </Link>
          <div className="arrow arrow-right"></div>
          <div className="stats">{this.props.statRightLabel}</div>
        </div>
        <div className="dash-line-bottom">
          <div className="arrow arrow-down"></div>
          <div className="stats">{this.props.statBottomLabel}</div>
        </div>
      </div>
    );
  }
}

export default connect(getStats, dashboardActions)(Dashboard);
