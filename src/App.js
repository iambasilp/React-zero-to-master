import logo from './logo.svg';
import './App.css';

function App() {

  // varaibles
  const a = 10;
  // functions
  function hello() {
    return <h2>Fuction check</h2>
  }
  // inline styleing
  // const style = {
  //   color:"white",
  //   backgroundColor:"red", // camelcase only possible to create property name
  //   textAlign:"center",
  // }

  function ButtonClicked() {
    console.log("Button Clicked")
  }
  const fullName = (name) => {
    console.log(name);
  }
  // Array
  const fruits = ["Apple", "orange", "banana", "mango"]
  return (
    <div className="app"> {/*  React fragmentation we can use alternative React.fragmentation tag */}
      {/* we can use className instead of class selector in html */}
      {/* we can use within any single line statement returns */}
      <h1 style={{ color: "white", backgroundColor: "red", textAlign: "center" }}> variable check {a}</h1>
      {hello()}

      <p>array check</p>
      {fruits.map((element) => {
        return <ul>

          <li>{element}</li>
        </ul>
      })}
      {/* intro Event handling later we discuss more */}
      <button style={{ padding: "2rem 3.5rem", marginLeft: "2rem", backgroundColor: "blue", color: "white" }} onClick={ButtonClicked}>Click</button>  {/*in event we add  Fuction refrence*/}
      <button style={{ padding: "2rem 3.5rem", margin: "2rem 0rem 0rem 2rem", color: "white", backgroundColor: "red" }} onClick={() => {
        fullName("Basil Pulikuth")
      }} >Explore</button>  {/* in this case we add function within another function for passing argument*/}
      <label htmlFor=""></label> {/* we use htmlFor instead for*/}
    </div>
  );
}

export default App;
