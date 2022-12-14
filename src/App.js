import logo from './logo.svg';
import Header from './Components/Header/Header';
import List from './Components/List/List';
import './App.css';

function App(){
  return(
    // we didnt add direct code in here we import components here
    <div className="App">
      <Header/>  {/* component self Closing Tage . we can reusable this component */}
      <List />
    </div>
  )
}
export default App