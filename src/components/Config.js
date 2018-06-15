import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";
import dashboardActions from '../store/actions';
import getStats from '../store/selectors';
import '../App.css';

class Config extends Component {
  constructor(props){
    super(props)
    this.state = {
      configDone: false,
      currentTop: this.props.statTopLabel,
      currentLeft: this.props.statLeftLabel,
      currentRight: this.props.statRightLabel,
      currentBottom: this.props.statBottomLabel
    }
  }

  handleConfig = () => {
    this.props.setStatsLabels(this.state);
    this.setState({
      configDone: true
    });
  }

  handleInput = (event, position) => {
    this.setState({
      [`current${position}`]: event.target.value
    })
  }

  render() {
    const { currentTop, currentLeft, currentRight, currentBottom, configDone } = this.state;
    return (
      <div className="mobile-container">
        Config
        <div>
          <form onSubmit={this.handleConfig}>
            <div>
              <label>On Top: </label>
              <input type="text" value={currentTop} onChange={(event, position) => { this.handleInput(event, 'Top') }} />
            </div>
            <div>
              <label>On Left: </label>
              <input type="text" value={currentLeft} onChange={(event, position) => { this.handleInput(event, 'Left') }} />
            </div>
            <div>
              <label>On Right: </label>
              <input type="text" value={currentRight} onChange={(event, position) => { this.handleInput(event, 'Right') }} />
            </div>
            <div>
              <label>On Bottom: </label>
              <input type="text" value={currentBottom} onChange={(event, position) => { this.handleInput(event, 'Bottom') }} />
            </div>
            <button>OK</button>
          </form>
        </div>
        {configDone && <Redirect to='/dashboard' />}
      </div>
    );
  }
}

export default connect(getStats, dashboardActions)(Config);
