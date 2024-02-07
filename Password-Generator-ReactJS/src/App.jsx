import {useState, useCallback, useEffect, useRef} from 'react';
import './App.css';

function App(){

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumbersAllowed] = useState(false);
  const [charsAllowed, setCharsAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed){
      str += "1234567890";
    }
    if(charsAllowed){
      str += "!@#$%^&*(){}[]";
    }

    for(let i=0; i<length; i++){
      const char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  },[length, numberAllowed, charsAllowed]);

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  }

  useEffect(() => {
    generatePassword()
  }, [length,numberAllowed,charsAllowed]);

  return(
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8- bg-gray-800 text-sky-600'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
            type="text"
            className=' outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            value={password}
            ref={passwordRef}
          />
          <button
            className=' outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0 font-mono' onClick={copyPasswordToClipboard}
          >Copy</button>
        </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input 
                type="range" 
                min={6}
                max={25}
                value={length}
                className='cursor-pointer'
                onChange={(event) => setLength(event.target.value)} 
                id="length" 
              />
              <label htmlFor="length">Length:{length}</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input
               type="checkbox"
               defaultChecked={numberAllowed}
               onChange={() => {
                setNumbersAllowed((prevNumbersAllowed) => !prevNumbersAllowed);
               }} 
               id="numbers" />
              <label htmlFor="numbers">Numbers</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input
               type="checkbox"
               defaultChecked={charsAllowed}
               onChange={() => {
                setCharsAllowed((prevCharsAllowed) => !prevCharsAllowed);
               }} 
               id="characters" />
              <label htmlFor="characters">Characters</label>
            </div>

          </div>

        
      </div>
    </>
  );
}

export default App;