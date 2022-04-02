import React, {KeyboardEvent, useRef} from 'react';

type FullInputPropsType = {
    callBack: (myRefValue: string) => void

}

export const FullInput = (props: FullInputPropsType) => {
    let myRef = useRef<HTMLInputElement>(null)
    const onClickHandler = () => {
        if (myRef.current && myRef.current.value.trim() !== '') {
            props.callBack(myRef.current.value.trim())
            myRef.current.value = ""
        }
    }

    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        if(event.key ==="Enter"){
            onClickHandler()
        }
    }

    return (
        <div>
            <input type={"text"}
                   ref={myRef}
                   onKeyPress={onKeyPressHandler}

            />
            <button onClick={onClickHandler}>+</button>
        </div>
    );
};

