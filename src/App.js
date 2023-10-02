import logo from "./logo.svg";
import "./App.css";
import "./products.js";
import products from "./products.js";
import { Home } from "./components/Home";
import ShoeList from "./components/ShoeList";

function App() {
  return (
    <div className="contanr">
      <Home />
      <div className="imgprod">
        <ShoeList />
      </div>
    </div>
  );
}

export default App;

// {/* <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// {/* <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a> */}
// </header>
