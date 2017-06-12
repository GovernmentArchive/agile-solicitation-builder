import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from '../components/Header';

class App extends React.Component {

  render() {
    return (
      <div className="react-app">
        <Header/>
        <div className="usa-overlay"></div>

        <main className="usa-grid usa-section usa-content usa-layout-docs" id="main-content">
          <div className="usa-width-three-fourths usa-layout-docs-main_content">
            <div className="usa-width-one-whole header">
              <h1><a href="/">Agile Solicitation Builder</a></h1>
            </div>
            {this.props.children}
          </div>
        </main>
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
