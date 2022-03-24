import React, {Component} from 'react';
import Todo, {InArrayPropsType} from "./Todo";

type ContentPropsType = {
    skills1: Array<InArrayPropsType>
    cargoOfskills:Array<InArrayPropsType>
    setCargoOfskills:(cargoOfskills:Array<InArrayPropsType>)=>void
}

export const Content = (props: ContentPropsType) => {
    return (
        <>
            <div className="App">
                <Todo
                    topic={'What to learn1'}
                    cargo2={100200}
                    cargoOfskills={props.skills1}
                    setCargoOfskills={props.setCargoOfskills}

                />
            </div>
        </>
    )

}

export default Content;