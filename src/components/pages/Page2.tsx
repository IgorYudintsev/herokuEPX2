import React, {useState} from 'react';

export const Page2 = () => {

    const [counter, setCounter]=useState(0)

    const addNumber = () => {
        setCounter(counter+ 1)
    }

    return (
        <div style={{textAlign:'center',marginLeft:'50px'}}>
            <h1>number:{counter}</h1>
            <button style={{padding:'0 40px'}} onClick={addNumber}>+</button>

        </div>

    );
};
