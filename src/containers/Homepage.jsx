import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions';

export class Homepage extends React.Component {

  render() {
    return (
      <h1>Homepage Goes Here</h1>
    );
  }

}

const mapStateToProps = (state) => state;

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Homepage));
