import React, { Component } from 'react';

class Navigation extends Component{

  render(){

    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          { this.props.title }
          <span className="badge badge-pill badge-light ml-2">{ this.props.taskCounter === undefined ? 0 : this.props.taskCounter }</span>
        </a>
      </nav>
    );

  }

}

export default Navigation;
