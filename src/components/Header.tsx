import React from "react";
import styles from "./Header.module.css";

type HeaderPropsType = {
name:string
}

const Header = (props:HeaderPropsType) => {

    return (
        <h1 className={styles.name}>{props.name}</h1>
    )
}

export default Header;