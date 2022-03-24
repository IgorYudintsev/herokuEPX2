import React from 'react';
import styles from "./Header.module.css";

type FooterPropsType = {
    name:Array<string>
}

export const Footer = (props:FooterPropsType) => {
    console.log(props.name)
    return (
        <h1 className={styles.name}>
            {props.name[1]}
        </h1>
    );
};

