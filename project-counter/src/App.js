
import './App.css';
import { useState } from "react";

function App() {
const [counter, setCounter] = useState(0);

const addFunct = ()=>{
  setCounter(counter+1);
}
const removeFunct = ()=>{
  setCounter(counter-1);
}



  return (
    <div className="App">
      {/* <h1>hello bachooo</h1> */}


      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button className='button-inc' onClick={()=>{
        addFunct()
      }}>Increment</button>
      <button className='button-dec' onClick={()=>{
        removeFunct()
      }}>Decrement</button>
    </div>
  );
}

export default App;
