import React, {Component} from 'react';
import Todo, {InArrayPropsType} from "./Todo";
import {Page3} from "./pages/Page3";
import {Page2} from "./pages/Page2";
import {Route, Routes} from 'react-router-dom';

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