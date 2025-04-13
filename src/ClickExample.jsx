import React, {useState} from "react";
import './App.css';
 
function ClickExample() {
    const[message, setMessage] = useState('Hi');

    const handleClick = () => {
        setMessage('Button was Clicked!')
    };

    return (
        <div>
            <button className="cool-button" onClick={handleClick}>Click me!</button>
            <p>{message}</p>
        </div>
    );
}
export default ClickExample;