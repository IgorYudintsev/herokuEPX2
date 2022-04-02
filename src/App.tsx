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

    // const removeSkill = (id:number) =>{
    //    setCargoOfskills(cargoOfskills.filter(f=>f.id !==id))
    // }

    // const [newFilterValue, setNewVilterValue] = useState("All")
    //
    // let FilterValueForcargoOfskills = cargoOfskills
    //
    // if (newFilterValue === 'Active') {
    //     FilterValueForcargoOfskills =cargoOfskills.filter(element => !element.isDone)
    // }
    // if (newFilterValue === 'Completed') {
    //     FilterValueForcargoOfskills = cargoOfskills.filter(element => element.isDone)
    // }
    //
    // const onBtnClickHandlerForFilter = (filterValue: string) => {
    //     console.log(filterValue)
    //     setNewVilterValue(filterValue)
    // }

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
                />
            </div>

            <Footer name={arrForFooterHeder}/>
        </div>

    );
}

export default App;
