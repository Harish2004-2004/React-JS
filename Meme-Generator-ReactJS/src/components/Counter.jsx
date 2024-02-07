import Star from "./Star";
import { useState } from "react"; 
import "../Counter.css";

const Counter = () => {
    const [contact,setContact] = useState({
        firstName:"harish",
        lastName:"V",
        phone:"7708625765",
        email:"vharishvharish2019@gmail.com",
        isFavoutite:false   
    });



    function handleToggleFavourite(){
        setContact(prevContact => ({...prevContact,isFavoutite:!prevContact.isFavoutite}) );
    }
    return(
            <div>
                <h1>{contact.firstName + " " +contact.lastName}</h1>
                <h3>{contact.phone}</h3>
                <h4>{contact.email}</h4>
                <Star 
                    isFilled={contact.isFavoutite}
                    handleClick = {handleToggleFavourite}
                />
            </div>
        );

}
export default Counter;