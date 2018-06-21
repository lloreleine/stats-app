import React, { Component } from 'react';
import { Link } from "react-router-dom";
import getActions from '../store/actions';
import getStats from '../store/selectors';
import { connect } from 'react-redux';
import '../App.css';
import loading from '../imgs/loading.gif';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      saving: false,
      topCount: 0,
      leftCount: 0,
      rightCount: 0,
      bottomCount: 0
    }
  }

  increment = (event, position) => {
    this.setState({
      [position]: this.state[position] + 1
    })
  }

  handleSubmit = () => {
    this.setState({
      saving: true
    });

    const { topCount, leftCount, rightCount, bottomCount } = this.state;
    let globalCount = topCount + leftCount + rightCount + bottomCount;
    let labelsCounts = {
      [this.props.statTopLabel]: topCount,
      [this.props.statLeftLabel]: leftCount,
      [this.props.statRightLabel]: rightCount,
      [this.props.statBottomLabel]: bottomCount
    };

    this.props.insertStats(
      this.props.userid,
      labelsCounts,
      globalCount)
    .then((response) => {
        if(response) {
          this.props.history.push('/success');
        } else {
          this.props.history.push('/failed');
        }
      });
  }

  displayLabel = (positionLab) => {
    if(this.props[positionLab] === ''){
      return <div className="empty-label">vide</div>;
    } else {
      return this.props[positionLab];
    }
  }

  render() {
    const { saving, topCount, leftCount, rightCount, bottomCount } = this.state;

    return (
      <div>
        {saving ?
          <div className="mobile-container">
            Sauvegarde des données...
            <br/>
            Veuillez patienter
            <br/><br/>
            <img src={loading} width={'20px'} alt='loading' />
          </div>
        :
          <div className="mobile-container">
            <div className="settings">
              <Link to='/config' style={{ textDecoration: 'none', color: 'darkgrey' }}>
                Settings
              </Link>
            </div>
            <div className="counters">
              <h3>Counters</h3>
              <label>Top = </label>
              <span>{topCount}</span>
              <br/>
              <label>Left = </label>
              <span>{leftCount}</span>
              <br/>
              <label>Right = </label>
              <span>{rightCount}</span>
              <br/>
              <label>Bottom = </label>
              <span>{bottomCount}</span>
            </div>
            <div className="dash-line-top">
              <div className="stats">{this.displayLabel('statTopLabel')}</div>
              <div className="arrow"
                   onClick={(event, position) => this.increment(event, 'topCount')}>
                <i className="fas fa-chevron-circle-up"></i>
              </div>
            </div>
            <div className="dash-line-middle">
              <div className="stats label-rotate-left">{this.displayLabel('statLeftLabel')}</div>
              <div className="arrow"
                   onClick={(event, position) => this.increment(event, 'leftCount')}>
                <i className="fas fa-chevron-circle-left"></i>
              </div>
                <div className="circle" onClick={this.handleSubmit}>
                  Save
                </div>
              <div className="arrow"
                   onClick={(event, position) => this.increment(event, 'rightCount')}>
                <i className="fas fa-chevron-circle-right"></i>
              </div>
              <div className="stats label-rotate-right">{this.displayLabel('statRightLabel')}</div>
            </div>
            <div className="dash-line-bottom">
              <div className="arrow"
                   onClick={(event, position) => this.increment(event, 'bottomCount')}>
                <i className="fas fa-chevron-circle-down"></i>
              </div>
              <div className="stats">{this.displayLabel('statBottomLabel')}</div>
            </div>
          </div>
        }
      </div>
    );
  }
}

export default connect(getStats, getActions)(Dashboard);
