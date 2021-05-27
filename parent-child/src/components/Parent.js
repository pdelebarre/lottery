import React, { useState } from "react";

import Child from "./Child";

const Parent = () => {
    const [movie, setMovie]  = useState("");

    const handleSubmit = (event) => {
        console.log('submit', movie);
        alert(movie);
        setMovie("");
    }
    const handleChange = (event) => {
        setMovie(event.target.value);
       
    }

    const onDropdownHandler = (data) => {
        console.log("received from child", data);
    }

    return (
        <>
        <form onSubmit = {handleSubmit} >
            <label > Movie:
            <input type = "text" value = {movie} onChange={handleChange}/>
            </label>
            <input type = "submit" value = "OK" />
            
        </form>
       { movie && <Child onDropdownHandler = {onDropdownHandler} query={movie}/>}
</>
        );
};

export default Parent;
