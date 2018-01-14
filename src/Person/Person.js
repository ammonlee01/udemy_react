import React from 'react';
import './Person.css';
const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.clickHandler}>I'm {props.name} and I am {props.age } years old.</p>
            {props.children ? <p>{props.children}</p> : ""}
            <input type='text' onChange={(e)=>props.nameChangeHandler(e, props.childKey)} value={props.name}/>
        </div>
    );
}

export default person;