import React, { Component } from 'react';
import './FooterCSS.css';


function CustomFooter(props) {
    return (
        <div>
            <h5>Copyright</h5>
            <h6>All rights reserved</h6>
        </div>
    );
}

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
          <CustomFooter />
      </div>
    );
  }
}

export default Footer;
