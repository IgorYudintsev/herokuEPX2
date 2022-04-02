import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header";
import {Footer} from "./components/Footer";
import Content from "./components/Content";
import {Navigation} from "./components/Navigation";
import { v1 } from 'uuid';


function App() {
    let [cargoOfskills, setCargoOfskills] = useState([
        {id: v1(), skill: "HTML&CSS", isDone: true},
        {id: v1(), skill: "Flex", isDone: true},
        {id: v1(), skill: "GRID", isDone: false},
        {id: v1(), skill: "StyledComponents", isDone: true},
        {id: v1(), skill: "JS", isDone: true},
    ])

    const addTitle = (newSkill:string) => {
        let newcargoOfskills={id: v1(), skill: newSkill, isDone: true}
        setCargoOfskills([newcargoOfskills, ...cargoOfskills])
        console.log(newSkill)
    }

    const changeIsDone = (id: string, eventValue: boolean) => {
        setCargoOfskills(cargoOfskills.map(el => el.id === id ? {...el, isDone: eventValue} : el))
    }

    const arrForFooterHeder = ['HEADER', 'FOOTER']

    return (
        <div>
            <Header name={'header'}/>
            <div className={'body'}>
                <Navigation/>
                <Content
                    // onBtnClickHandlerForFilter={onBtnClickHandlerForFilter}
                    skills1={cargoOfskills}
                    cargoOfskills={cargoOfskills}
                    setCargoOfskills={setCargoOfskills}
                    changeIsDone={changeIsDone}
                    addTitle={addTitle}
                />
            </div>

            <Footer name={arrForFooterHeder}/>
        </div>

    );
}

export default App;
