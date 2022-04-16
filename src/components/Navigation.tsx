import React from 'react';
import {NavLink} from 'react-router-dom';
import style from "./Navigation.module.css"
import Button from "@mui/material/Button";



export const Navigation = () => {
    return (
        <div className={style.nav}>
            {/*<div><button><NavLink to={"/page1"}>Todo </NavLink></button></div>*/}
            {/*<div><button><NavLink to={"/page2"}>Counter</NavLink></button></div>*/}
            {/*<div><button><NavLink to={"/page3"}>Bankomat </NavLink></button></div>*/}
            {/*<div><button><NavLink to={"/InputPage"}>Input </NavLink></button></div>*/}
            {/*<div><button><NavLink to={"/Napoleon"}>Napoleon </NavLink></button></div>*/}
            {/*<div><button><NavLink to={"/Grids"}>Grids </NavLink></button></div>*/}
            {/*<div><button><NavLink to={"/Pagination"}>Pagination </NavLink></button></div>*/}

            <div><Button variant="contained" size={'small'} style={{backgroundColor:'white',marginTop:'30px', width:'160px' }}><NavLink style={{textDecoration:'none', color:'black'}} to={"/page1"}>Todo </NavLink> </Button></div>
            <div><Button variant="contained" size={'small'} style={{backgroundColor:'white',marginTop:'5px', width:'160px' }}><NavLink style={{textDecoration:'none', color:'black'}} to={"/page2"}>Counter </NavLink> </Button></div>
            <div><Button variant="contained" size={'small'} style={{backgroundColor:'white',marginTop:'5px', width:'160px' }}><NavLink style={{textDecoration:'none', color:'black'}} to={"/page3"}>Bankomat </NavLink> </Button></div>
            <div><Button variant="contained" size={'small'} style={{backgroundColor:'white',marginTop:'5px', width:'160px' }}><NavLink style={{textDecoration:'none', color:'black'}} to={"/InputPage"}>Input </NavLink> </Button></div>
            <div><Button variant="contained" size={'small'} style={{backgroundColor:'white',marginTop:'5px', width:'160px' }}><NavLink style={{textDecoration:'none', color:'black'}} to={"/Napoleon"}>Napoleon </NavLink> </Button></div>
            <div><Button variant="contained" size={'small'} style={{backgroundColor:'white',marginTop:'5px', width:'160px' }}><NavLink style={{textDecoration:'none', color:'black'}} to={"/Grids"}>Grids </NavLink> </Button></div>
            <div><Button variant="contained" size={'small'} style={{backgroundColor:'white',marginTop:'5px', width:'160px' }}><NavLink style={{textDecoration:'none', color:'black'}} to={"/Pagination"}>Pagination </NavLink> </Button></div>



        </div>
    );
};

