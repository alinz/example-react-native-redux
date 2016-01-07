'use strict';

import React, { Component } from 'react-native';
import {bindActionCreators} from 'redux';
import Counter from '../components/counter';
import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';

// @connect(state => ({
//   state: state.counter
// }))
class CounterApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, dispatch } = this.props;

    return (
      <Counter
        counter={state.count}
        {...bindActionCreators(counterActions, dispatch)} />
    );
  }
}

export default connect(state => ({
  state: state.counter
}))(CounterApp);
