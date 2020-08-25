import React from "react";
import {Link} from 'react-router-dom';

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {  };
  }

  render() {
    return (
      <div className="Header row">
        <span className="col-6">  <Link to="/">Home</Link></span>
      </div>
    );
  }
}

export default Header;
