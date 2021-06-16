import ReactDOM from "react-dom";

import State from "./State";
import Effect from "./Effect";


import "./styles.css";

function App() {
  return (
    <div className="App">
      <State />
      <Effect />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
