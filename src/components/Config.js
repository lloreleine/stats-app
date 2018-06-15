import React, { Component } from 'react';
import { connect } from 'react-redux';
import dashboardActions from '../store/actions';
import getStats from '../store/selectors';
import '../App.css';

class Config extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentTop: '',
      currentLeft: '',
      currentRight: '',
      currentBottom: ''
    }
  }

  handleConfig = () => {
    
  }

  handleInput = (position) => {

  }

  render() {
    return (
      <div className="mobile-container">
        Config
        <div>
          <form onSubmit={this.handleConfig}>
            <div>
              <label>On Top: </label>
              <input type="text" value={this.currentTop} onChange={() => this.handleInput('top')} placeholder={this.props.statTopLabel} />
            </div>
            <div>
              <label>On Left: </label>
              <input type="text" value={this.currentLeft} onChange={() => this.handleInput('left')} placeholder={this.props.statLeftLabel} />
            </div>
            <div>
              <label>On Right: </label>
              <input type="text" value={this.currentRight} onChange={() => this.handleInput('right')} placeholder={this.props.statRightLabel} />
            </div>
            <div>
              <label>On Bottom: </label>
              <input type="text" value={this.currentBottom} onChange={() => this.handleInput('bottom')} placeholder={this.props.statBottomLabel} />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(getStats, dashboardActions)(Config);
