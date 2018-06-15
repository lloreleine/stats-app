import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../App.css';

class Home extends Component {
  render() {
    return (
      <div className="mobile-container">
        <h1>Newfeel Stats App</h1>
        <Link to="/dashboard" style={{ textDecoration: 'none' }}>
          <div>Go</div>
        </Link>
      </div>
    );
  }
}

export default Home;
