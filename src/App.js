import './App.css';
import Navbar from '../src/components/Navbar';
import SideDrawer from './components/SideDrawer';
import TaskList from './components/TaskList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <SideDrawer />
      <Navbar />
      <TaskList />
      </header>
    </div>
  );
}

export default App;
