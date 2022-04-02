import React, {useState} from "react";
import {MapForOurCargo} from "./MapForOurCargo";
import styles from "./pages/Page3.module.css";
import {Button} from "./tags/Button";


type TodoPropsType = {
    topic: string
    cargo2: number
    cargoOfskills: Array<InArrayPropsType>
    setCargoOfskills: (cargoOfskills: Array<InArrayPropsType>) => void
    // onBtnClickHandlerForFilter:(filterValue: string)=>void
    changeIsDone:(id:number,eventValue:boolean)=>void
}

export type InArrayPropsType = {
    id: number,
    skill: string,
    isDone: boolean
}

const Todo = (props: TodoPropsType) => {
    const [newFilterValue, setNewVilterValue] = useState("All")

    let FilterValueForcargoOfskills = props.cargoOfskills

    if (newFilterValue === 'Active') {
        FilterValueForcargoOfskills =props.cargoOfskills.filter(element => !element.isDone)
    }
    if (newFilterValue === 'Completed') {
        FilterValueForcargoOfskills = props.cargoOfskills.filter(element => element.isDone)
    }

    const onBtnClickHandlerForFilter = (filterValue: string) => {
        console.log(filterValue)
        setNewVilterValue(filterValue)
    }
    return (
        <div style={{margin: "20px"}}>
            <h1>{props.topic}</h1>
            <h3>{props.cargo2}</h3>
            <MapForOurCargo
                cargoOfskills={FilterValueForcargoOfskills}
                setCargoOfskills={props.setCargoOfskills}
                changeIsDone={props.changeIsDone}
            />

            <div style={{textAlign: "center"}}>
               {/* <button className={styles.td} onClick={() => {
                    onBtnClickHandlerForFilter("All")
                }}>All
                </button>
                <button className={styles.td} onClick={() => {
                    onBtnClickHandlerForFilter("Active")
                }}>Active
                </button>
                <button className={styles.td} onClick={() => {
                    onBtnClickHandlerForFilter("Completed")
                }}>Completed
                </button>*/}
                <Button name={"All"} callBack={()=>{onBtnClickHandlerForFilter("ALL")}}/>
                <Button name={"Active"} callBack={()=>{onBtnClickHandlerForFilter("Active")}}/>
                <Button name={"Completed"} callBack={()=>{onBtnClickHandlerForFilter("Completed")}}/>
            </div>

        </div>
    )
}

export default Todo