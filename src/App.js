import { Component } from 'react';
import './App.css';
import Dishes from './Components/Dishes/Dishes';

export default class App extends Component {
  render () {
    return (
      <div className="App">
        <Dishes />
      </div>
    );
  }
}