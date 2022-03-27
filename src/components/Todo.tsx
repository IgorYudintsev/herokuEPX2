import React from "react";
import {MapForOurCargo} from "./MapForOurCargo";
import styles from "./pages/Page3.module.css";


type TodoPropsType = {
    topic: string
    cargo2: number
    cargoOfskills: Array<InArrayPropsType>
    setCargoOfskills: (cargoOfskills: Array<InArrayPropsType>) => void
    onBtnClickHandlerForFilter:(filterValue: string)=>void

}

export type InArrayPropsType = {
    id: number,
    skill: string,
    isDone: boolean
}

const Todo = (props: TodoPropsType) => {
    return (
        <div style={{margin: "20px"}}>
            <h1>{props.topic}</h1>
            <h3>{props.cargo2}</h3>
            <MapForOurCargo cargoOfskills={props.cargoOfskills} setCargoOfskills={props.setCargoOfskills}/>

            <div style={{textAlign: "center"}}>
                <button className={styles.td} onClick={() => {
                    props.onBtnClickHandlerForFilter("All")
                }}>All
                </button>
                <button className={styles.td} onClick={() => {
                    props.onBtnClickHandlerForFilter("Active")
                }}>Active
                </button>
                <button className={styles.td} onClick={() => {
                    props.onBtnClickHandlerForFilter("Completed")
                }}>Completed
                </button>
            </div>

        </div>
    )
}

export default Todo