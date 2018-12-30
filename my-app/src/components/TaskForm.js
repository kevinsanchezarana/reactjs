import React, { Component } from 'react';

class TaskForm extends Component{

  constructor (){

    super();
    this.state = {
      title: "",
      responsable: "",
      description: "",
      priority: "low"
    };

    this.refreshState = this.refreshState.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onSubmit( e ){
    e.preventDefault();
    this.props.addTask( this.state );
  }


  refreshState( e ){
      //console.log( e.target.value, e.target.name);
      const { value, name } = e.target;
      //console.log( value, name);
      this.setState({
        [name] : value
      });
      console.log( this.state );
  }


  render(){

    return (
      <div className="card">
        <h5 className="card-title mt-4">Add Task</h5>
        <div className="card-body">

          <form action="#" onSubmit={this.onSubmit}>

            <div className="input-group mb-3">
              <input type="text" onChange={this.refreshState} name="title" className="form-control" placeholder="title" aria-label="title" aria-describedby="basic-addon1"/>
            </div>

            <div className="input-group mb-3">
              <input type="text" onChange={this.refreshState} name="responsable" className="form-control" placeholder="responsable" aria-label="responsable" aria-describedby="basic-addon2"/>
            </div>

            <div className="input-group mb-3">
              <input type="text" onChange={this.refreshState} name="description" className="form-control" placeholder="description" aria-label="description" aria-describedby="basic-addon2"/>
            </div>

            <div className="input-group mb-3">
              <select onChange={this.refreshState} name="priority" className="custom-select" id="inputGroupSelect01">
                <option selected>Priority...</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>

            <button type="submit" className="btn btn-outline-primary">Save</button>

          </form>

        </div>
      </div>
    );

  }

}

export default TaskForm;
