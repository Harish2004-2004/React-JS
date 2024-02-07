import {useState} from 'react';
import './App.css';
const App = () => {
  const [counter, setCounter] = useState(0);

  const decrement = () => {
    setCounter(prevCounter => prevCounter - 1);
  }
  const reset = () => {
    setCounter(0);
  }
  const increment = () => {
    setCounter(prevCounter => prevCounter + 1);
  }

  return(
    <>
      <label style={{
        color:"gray",
        fontSize:"8rem",
        marginLeft:"650px",
        fontWeight:"bold",
        fontFamily:"monospace",
      }}>
        {counter}
      </label>
      <br />
      <button className='first-btn' onClick={decrement}>Decrease</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increase</button>

      
    </>
  );
}

export default App;