import React, {ChangeEvent, KeyboardEvent} from 'react';

type InputPropsType = {
    callBack:()=>void,
    title: string
    setTitle: (title: string) => void
}

const Input = (props: InputPropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            props.callBack()
        }
    }

    return (
        <input onChange={onChangeHandler} value={props.title} onKeyPress={onKeyPressHandler}/>
    );
};

export default Input;