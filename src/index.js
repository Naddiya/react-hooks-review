import ReactDOM from "react-dom";

import State from "./State";
import Effect from "./Effect";
import Context from "./Context";
import Ref from "./Ref";
import Reducer from "./Reducer";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <State />
      <Effect />
      <Context />
      <Ref />
      <Reducer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
