import { useState } from 'react';
import './index.css';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import {InputBox} from './components/index.js';

const App = () => {

    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [convertedAmount, setConvertedAmount] = useState(0);

    const currencyInfo = useCurrencyInfo(from);
    const options = Object.keys(currencyInfo);

    

    const swap = () => {
        setTo(from);
        setFrom(to);
        setAmount(0);
        setConvertedAmount(0);
        
    }

    const convert = () => {
        setConvertedAmount((amount * currencyInfo[to].toFixed(5)));
    }

    return(
        <div 
        className='w-full h-screen flex flex-wrap justify-center items-center bg-center bg-cover bg-no-repeat overflow-x-hidden overflow-y-hidden'
        style={{backgroundImage:`url(https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`}}
        >
            <div className='w-full'>
                <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
                <h1 className='text-white mb-2 text-center font-bold text-2xl'>Currency Converter</h1>
                    <form onSubmit={(event) => {
                        event.preventDefault();
                        convert();
                    }}>
                        <div className='w-full mb-1'>
                            <InputBox 
                                label="From"
                                amount={amount}
                                onAmountChange={(amount) => setAmount(amount)}
                                onCurrencyChange={(currency) => setFrom(currency)}
                                currencyOptions={options}
                                selectedCurrency={from}
                            />
                        </div>
                        <div className='relative w-full h-0.5'>
                            <button 
                            className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                            onClick={swap}
                            >
                                Swap
                            </button>
                        </div>
                        <div className='w-full mb-1'>
                            <InputBox 
                                label="To"
                                amount={convertedAmount}
                                currencyOptions={options}
                                selectedCurrency={to}
                                onCurrencyChange={(currency) => setTo(currency)}
                                amountDisabled={true}
                            />
                        </div>
                        <div>
                            <button type='submit' className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;