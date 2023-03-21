import './App.css';
import NameFilter from './Components/NameFilter/NameFilter';

function App() {
  const nameList = ['Arvind', 'Shah', 'Dheeraj', 'Mukesh', 'Shrey'] 

  return (
    <div className="App">
      <NameFilter nameList={nameList}/>
    </div>
  );
}

export default App;
