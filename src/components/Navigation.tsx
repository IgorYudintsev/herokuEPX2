import React from 'react';
import { NavLink } from 'react-router-dom';
import style from "./Navigation.module.css"




export const Navigation = () => {
    return (
        <div className={style.nav}>
            <div><button><NavLink to ={"/page1"}>Todo </NavLink> </button></div>
            <div><button><NavLink to ={"/page2"}>Counter</NavLink> </button></div>
            <div><button><NavLink to ={"/page3"}>Bankomat </NavLink> </button></div>
            <div><button><NavLink to ={"/InputPage"}>Input </NavLink> </button></div>
        </div>
    );
};

