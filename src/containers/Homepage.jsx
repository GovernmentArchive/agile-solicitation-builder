import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../actions';

export class Homepage extends React.Component {

  render() {
    return (
      <div>
        <h4>
          Welcome to the Agile Solicitation Builder, formerly the Playbook in
          Action! Before you begin, please consider the following:
        </h4>
        <ul>
          <li>The intent of this tool is to assist in the creation of
            requirements documents for agile software development using best
            practices from the USDS Playbook and TechFAR.</li>
          <li>The PM and the CO should use this tool jointly in partnership.
            Certain pages will only be applicable to only the CO or the PM.</li>
          <li>V1 is for firm fixed price contracts only. The firm fixed price
            will be per iteration. </li>
          <li>This tool is not built to support waterfall development
            requirements documents.</li>
          <li>All documents should be approved by a warranted contracting
            officer and in consultation with your legal counsel as required.</li>
        </ul>
        <h4>Also please note that this product is only in alpha, therefore
          any of the following may occur:</h4>
        <ul>
          <li>Content may unexpectedly change</li>
          <li>Documents you have created may be deleted without warning</li>
          <li>Certain pages may not always be functioning. We recommend you
            refresh the page if this happens</li>
        </ul>
      </div>
    );
  }

}

const mapStateToProps = (state) => state;

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Homepage));
