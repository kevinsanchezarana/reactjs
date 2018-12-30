import React, { Component } from 'react';

class Task extends Component{

  render(){

    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>
          <span className="badge badge-danger">{this.props.priority}</span>
        </div>
      </div>
    );

  }

}

export default Task;
