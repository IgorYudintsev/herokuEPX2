import React, {Component} from 'react';
import {Route, Routes} from 'react-router-dom';
import Todo, {InArrayPropsType} from "./Todo";
import {Page2} from "./Page2";
import {Page3} from "./Page3";

type ContentPropsType = {
    skills1: Array<InArrayPropsType>
    cargoOfskills: Array<InArrayPropsType>
    setCargoOfskills: (cargoOfskills: Array<InArrayPropsType>) => void
}

export const Content = (props: ContentPropsType) => {
    return (
        <>
            <div className="App">
                <Routes>
                    <Route path={'/page1'} element={<Todo
                        topic={'What to learn1'}
                        cargo2={100200}
                        cargoOfskills={props.skills1}
                        setCargoOfskills={props.setCargoOfskills}
                    />}/>
                    <Route path={'/page2'} element={<Page2/>}/>
                    <Route path={'/page3'} element={<Page3/>}/>
                </Routes>
            </div>
        </>
    )

}

export default Content;