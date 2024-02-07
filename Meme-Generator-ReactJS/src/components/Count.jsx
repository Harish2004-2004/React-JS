import { useState, useEffect } from "react";

const Count = () => {

    const [apiData,setApiData] = useState({});
    const [count, setCount] = useState(0);

    console.log("Component rendered");

    function handleCount(){
        setCount(prevCount => prevCount + 1);
    }
    

    useEffect(() => {
        console.log("Effect ran");
        fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => setApiData(data))
    }, []);

    return(     
        <div>
            <pre>{JSON.stringify(apiData,null,2)}</pre>
            <h1>The Count is {count}</h1>
            <button onClick={handleCount}>Add</button>
        </div>
    )

}

export default Count;