import React from 'react';
import {InArrayPropsType} from "./Todo";

type MapPropsType = {
    cargoOfskills:Array<InArrayPropsType>
    setCargoOfskills: (cargoOfskills:Array<InArrayPropsType>)=>void
}

export const MapForOurCargo = (props:MapPropsType) => {

    // const onClickHandler = (id:number)=>{
    //  props.removeSkill(id)
    // }

    const removeSkill = (id:number) =>{
        props.setCargoOfskills(props.cargoOfskills.filter(f=>f.id !==id))
    }


    return (
        <ul>
            {props.cargoOfskills.map((el, index) => {
                return (
                    <li key={el.id}>
                        <button onClick={()=>{removeSkill(el.id)}}>X</button>
                        <span>{el.id}</span>
                        <input type="checkbox" checked={el.isDone}/>
                        <span>{el.skill}</span>
                    </li>
                )
            })}
        </ul>
    );
};

export default Map;