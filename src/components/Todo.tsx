import React from "react";
import {MapForOurCargo} from "./MapForOurCargo";


type TodoPropsType = {
    topic: string
    cargo2: number
    cargoOfskills: Array<InArrayPropsType>
    setCargoOfskills: (cargoOfskills: Array<InArrayPropsType>) => void

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

            {/*<ul>*/}
            {/*    {props.cargoOfskills.map((el, index) => {*/}
            {/*        return (*/}
            {/*            <li>*/}
            {/*                <button>X</button>*/}
            {/*                <span>{index + 1}</span>*/}
            {/*                <input type="checkbox" checked={el.isDone}/>*/}
            {/*                <span>{el.skill}</span>*/}
            {/*            </li>*/}
            {/*        )*/}
            {/*    })}*/}
            {/*</ul>*/}
        </div>
    )
}

export default Todo