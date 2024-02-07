import {useState} from 'react';
import "./App.css";

const App = () => {
  const[color,setColor] = useState('gray');
  function changeColor(selectedColor){
    setColor(prevColor => selectedColor);
  }

  return(
    <>
      <div style={{
        backgroundColor:color,
       width:"100%",
       minHeight:"100vh"
      }}>
        <div className='buttons'>
          <div className='button-container'>
            <button onClick={() => changeColor("red")} className='red-button'>Red</button>
            <button className='green-button' onClick={() => changeColor("green")}>Green</button>
            <button className='blue-button' onClick={() => changeColor("blue")}>Blue</button>
            <button className='violet-button' onClick={() => changeColor("violet")}>Violet</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;