import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends React.Component {

  render() {
    return (
      <div className="react-app">
        <p>Header</p>
        <hr/>
        {this.props.children}
        <hr/>
        <p>Footer</p>
      </div>
    );
  }

}

App.propTypes = {
  children: React.PropTypes.element.isRequired
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
