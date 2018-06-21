import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../App.css';

class Failed extends Component{

  render() {
    return (
        <div className="mobile-container">
          <div className="feedback_baseline">Sorry we receive an error please try again later...</div>
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>
        </div>
    );
  }
}

export default (Failed);
