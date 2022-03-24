import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Navigation.module.css'

export const Navigation = () => {
    return (
        <div className={styles.nav}>
            <button><NavLink to={'/page1'}>TodoList</NavLink></button>
            <button><NavLink to={'/page2'}>Counter</NavLink></button>
            <button><NavLink to={'/page3'}>page3</NavLink></button>
            <button>page4</button>
            <button>page5</button>
        </div>
    );
};
