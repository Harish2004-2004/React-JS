import { useState } from "react";


const Joke = () => {

    const [formData, setFormData] = useState({
        userName:"",
        password:"",
        confirmed:"",
        join:false
    })


    function handleChange(event){
        const {name, value, type, checked} = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name] : type === "checkbox"?checked:value
            }
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        if(formData.password === formData.confirmed){
            console.log("Successfully signed up");
        }else{
            console.log("passwords do not match");
            return
        }

        formData.join&&console.log("Thanks for signing up");

    }

    return(
        <div id="form-container">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="username/email" name="userName" value={formData.userName}
                    onChange={handleChange}
                />

                <input type="password" placeholder="Enter your password" name="password" value={formData.password} onChange={handleChange}/>
                
                <input type="password" placeholder="Confirm your password" name="confirmed" value={formData.confirmed} onChange={handleChange}/>
                <div>
                    <input type="checkbox" id="join" className="chk" name="join" value={formData.join} checked={formData.join} onChange={handleChange}/>
            
                    <label htmlFor="join">I want to join the newsletter</label>
                </div>
            
                <button>Sign up</button>
            </form>
        </div>
    );
}

export default Joke;