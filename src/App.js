import { useState } from "react";
import "./App.css";

function App() {
  // const [counter, setCounter] = useState(0);

  // const addingHandler = () => {
  //   setCounter(counter + 1);
  // };

  ///////////////////////////////////////////////////
  // const [show, setShow] = useState(true);

  // const showHandler = () => {
  //   setShow(!show);
  // };

  //////////////////////////////////////////////////////

  const [loun, setLoun] = useState("red");

  const changeColorHandler = () => {
    if (loun === "red") {
      setLoun("blue");
    } else {
      setLoun("red");
    }
  };

  return (
    <div className="App">
      {/* <p> {counter} </p>

      <button onClick={addingHandler}>+</button> */}

      {/* {show === true ? <p>Hello</p> : <p>Good Bye</p>}

      <button onClick={showHandler}>ClickMe</button> */}

      <p style={{ color: loun }}>Hello there</p>
      <button onClick={changeColorHandler}>
        {loun === "red" ? "Blue" : "Red"}
      </button>
    </div>
  );
}

export default App;
