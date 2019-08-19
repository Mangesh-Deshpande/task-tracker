import React, { Component } from 'react';
import TaskList from './components/taskList';

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="container" >
        <div className="main_header">Task Tracker</div>
        <div className="form_wrapper">
          <form className="form_container">
            <div className="custom_input">
              <input type="text" placeholder="Enter a task here" />
            </div>
            <div className="custom_btn">Add task</div>
          </form>
        </div>
        <div className="task_container">
          <TaskList />
        </div>
      </div>
    );
  }
}

export default App;
