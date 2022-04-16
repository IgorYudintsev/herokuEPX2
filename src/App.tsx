import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header";
import {Footer} from "./components/Footer";
import Content from "./components/Content";
import {Navigation} from "./components/Navigation";

function App() {
    let [cargoOfskills, setCargoOfskills] = useState([
        {id: 1, skill: "HTML&CSS", isDone: true},
        {id: 2, skill: "Flex", isDone: true},
        {id: 3, skill: "GRID", isDone: false},
        {id: 4, skill: "StyledComponents", isDone: true},
        {id: 5, skill: "JS", isDone: true},
    ])

    const changeIsDone = (id: number, eventValue: boolean) => {
        setCargoOfskills(cargoOfskills.map(el => el.id === id ? {...el, isDone: eventValue} : el))
    }


    const arrForFooterHeder = ['HEADER', 'FOOTER']

    return (
        <div>
            <Header />
            <div className={'body'}>
                <Navigation/>
                <Content
                    skills1={cargoOfskills}
                    cargoOfskills={cargoOfskills}
                    setCargoOfskills={setCargoOfskills}
                    changeIsDone={changeIsDone}
                />
            </div>

            <Footer name={arrForFooterHeder}/>
        </div>

    );
}

export default App;
