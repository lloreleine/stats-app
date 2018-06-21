import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../App.css';

class Success extends Component{

  render() {
    return (
        <div className="mobile-container">
          <div className="feedback_baseline">Thank you for your feedback</div>
          <Link to="/dashboard">
            <button>Dashboard</button>
          </Link>
        </div>
    );
  }
}

export default (Success);
