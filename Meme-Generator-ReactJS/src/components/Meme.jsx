import { useState, useEffect } from "react";
import memeData from "../memeData";


const Meme = () => {

    const [meme, setMeme] = useState({
        topText:"",
        bottomText:"",
        randomImage:"https://i.imgflip.com/30b1gx.jpg"
    });

    useEffect(() => {
        let memesData = [];
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => [(JSON.stringify(data.data.memes))])
            .then(data => console.log(data))
    },[])

    const[allMemeImages,setAllMemeImages] = useState(memeData);

    const handleGenerateMeme = (e) =>{
        e.preventDefault();
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                randomImage:url   
            }
        });
    }

    function handleChange(event){
        setMeme(prevMeme => {
            const {name , value} = event.target;
            return {
                ...prevMeme,
                [name] : value
            }
        })
    }

    console.log(meme);

    return(
        <div>
            <form action="submit">
                <div className="form-inputs-container">
                    <label htmlFor="top-text">Top text</label>
                    <label htmlFor="bottom-text">Bottom text</label>
                    <input type="text" placeholder="top text" value={meme.topText} name="topText"
                        onChange={handleChange}
                    />
                    <input type="text" placeholder="bottom text"value={meme.bottomText} name="bottomText"
                        onChange={handleChange}/>
                </div>
                <div className="button-container">
                    <button className="form-button" onClick={handleGenerateMeme}>Get a new meme image</button>
                </div>
                <div className="meme">
                    <img src={meme.randomImage} alt="an meme template" className="meme-template-image"/>
                    <h2 className="meme-text top" >{meme.topText}</h2>
                    <h2 className="meme-text bottom">{meme.bottomText}</h2>
                </div>
                
            </form>
        </div>
    );
}

export default Meme;