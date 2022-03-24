import React, {useState} from 'react';

export const Page2 = () => {
    let [number, setNumber] = useState(0)
    const onClickHandler = () => {
        setNumber(++number)
    }
    return (
        <div>
            <h1>Number: {number}</h1>
            <div>
                <button style={{width:'200px'}} onClick={onClickHandler}>+</button>
            </div>
        </div>


    );
};

