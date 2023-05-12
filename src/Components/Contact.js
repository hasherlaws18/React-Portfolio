import React, {useState, userState} from "react";
import {vaidateEmail} from "../utils/Helper";

function Contact(props){
    const[email, setEmail] = useState('');
    const[userName, setUserName] = useState("");
    const [mesage, setMessage] = userState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(!vaidateEmail(email) || !userName) {
           setErrorMessage("email or username is wrong");
           return;
        }
        if(!setMessage(mesage)) {
            setErrorMessage("Message is required.");
            return;
        }
    }
}