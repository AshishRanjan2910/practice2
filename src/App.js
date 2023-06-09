import { Component } from 'react';
import './App.css';
import NameFilter from './Components/NameFilter/NameFilter'
import Dishes from './Components/Dishes/Dishes'
import TodoList from './Components/TodoList/TodoList';

export default class App extends Component {
  render () {
    const nameList = ['Arvind', 'Shah', 'Dheeraj', 'Mukesh', 'Shrey'] 

    const items = [
      { text: 'Coding 1 hour', done: true },
      { text: 'Meditate 10 mins', done: false },
      { text: 'Drink Water 3 Liters', done: true },
      { text: 'Do laundry', done: false },
    ];
    const itemClickHandle = (item, event) => {
      console.log(`"${item.text}" is still to be done.`, event);
    }
    return (
      <div className="App">
        <NameFilter nameList={nameList}/>
        <Dishes/>
        <TodoList items={items} onItemClick={itemClickHandle} />
      </div>
    );
  }
}