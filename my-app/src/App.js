import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Task from './components/Task';
import TaskForm from './components/TaskForm';
import { todos } from './todos.json';

class App extends Component {

  constructor(){
    super();
    this.state = todos;

    this.addTask = this.addTask.bind(this);
  }

  addTask( task ){
    if( task ){

      var newArray = this.state;
      newArray.push(task);
      this.setState(newArray);
    }
  }


  render() {

    console.log( this.state );
    debugger;


    const todos = this.state.map( ( todo, i ) => {
      return(
        <div className="col-sm-12 col-md-4">
          <Task title={ todo.title } description={ todo.description } priority={ todo.priority } />
        </div>
      )
    })

    return (
      <div className="App">
        <Navigation title="Tasks" taskCounter={this.state.length} />
        <div className = "container">
          <div className="row mt-4">

            <div className="col-sm-12 col-md-3">
              <TaskForm addTask={this.addTask}/>
            </div>
            <div className="col-sm-12 col-md-9">
              <div className="row">
                { todos }
              </div>
            </div>

          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;
