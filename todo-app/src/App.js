import React, { Component } from 'react';
import Form from './components/Form';
import './App.scss';
import { Provider } from 'mobx-react';
import TodoStore from '../src/stores/TodoStore';

const store = new TodoStore();

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-formContainer">
          <Form></Form>
        </div>
      </div>
    );
  }
}

export default App;