import React from 'react';

const Test = (props) => {
    return (
        <div>
            <h1>My name is {props.name} and I am {props.age} and I live {props.location}</h1>
            <p> my email is {props.email} and my phone number is {props.phnumber}</p>
        </div>
    )
};

export default Test

