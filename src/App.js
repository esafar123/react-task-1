import logo from "./logo.svg";
import "./App.css";
import "./products.js";
import products from "./products.js";

function App() {
  const productList = products.map((product) => {
    return (
      <div className="imgprod">
        <img src={product.img} width="200px" />
        <h3> {product.name}</h3>
        <p> {product.price}</p>
      </div>
    );
  });
  return (
    <div className="contanr">
      <h1>Nike app</h1>
      <h3>the Best app in the word </h3>
      <img
        width="600px"
        src="https://www.psychologies.co.uk/wp-content/uploads/sites/3/2014/10/iStock_000018517104_big_smile-1.jpg"
      ></img>
      <div className="prodlist">{productList}</div>
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
