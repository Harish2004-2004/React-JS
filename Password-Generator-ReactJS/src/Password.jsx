import {useState, useCallback, useEffect, useRef} from 'react';
import './index.css';

const Password = () => {
    const [length, setLength] = useState(7);
    const [numbersAllowed, setNumbersAllowed] = useState(false);
    const [charactersAllowed, setCharactersAllowed] = useState(false);
    const [password, setPassword] = useState("");

    const generatePassword = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if(charactersAllowed) str += "@#$*&!/[]{}";
        if(numbersAllowed) str += "1234567890";
        
        for(let i=0; i<length; i++){
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char);
        }
        setPassword(pass);
    },[length, numbersAllowed, charactersAllowed]);

    useEffect(() => {
        generatePassword()
    }, [length, numbersAllowed, charactersAllowed]);

    const passwordRef = useRef(null);

    const copyPassword = () => {
        window.navigator.clipboard.writeText(password);
        passwordRef.current.select();
    }

    return(
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-sky-600'>
            <h1 className='text-white text-center my-3'>Password Generator</h1>
            <div className='flex shadow rounded-lg overflow-hidden mb-4'>
                <input 
                    type="text"
                    placeholder='Password'
                    className=' outline-none w-full py-1 px-3'
                    readOnly
                    value={password}
                    ref={passwordRef}
                />
                <button 
                className=' outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0 font-mono'
                onClick={copyPassword}
                >
                    Copy
                </button>
            </div>
            <div className='flex text-sm gap-x-2'>
                <div className='flex items-center gap-x-1'>
                    <input 
                        type="range"
                        id="length"
                        value={length}
                        min={7}
                        max={25}
                        className='cursor-pointer'
                        onChange={(event) => {
                            setLength(event.target.value);
                        }}
                    />
                    <label htmlFor="length">Length:{length}</label>
                </div>
                <div className='flex items-center gap-x-1'>
                    <input 
                        type="checkbox" 
                        id='characters'
                        defaultChecked={charactersAllowed}
                        onChange={() => {
                            setCharactersAllowed((prevCharactersAllowed) => !prevCharactersAllowed);
                        }}
                    />
                    <label htmlFor="characters">Characters</label>
                </div>
                <div className='flex items-center gap-x-1'>
                    <input 
                        type="checkbox" 
                        id='numbers'
                        defaultChecked={numbersAllowed}
                        onChange={() => {
                            setNumbersAllowed((prevNumbersAllowed) => !prevNumbersAllowed);
                        }}
                    />
                    <label htmlFor="numbers">Numbers</label>
                </div>
            </div>
        </div>           
    );
}
export default Password;