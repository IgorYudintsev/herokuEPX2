import React, {useState} from 'react';
import styles from "./Page3.module.css"
import {Button} from "../tags/Button";

export const Page3 = () => {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'EUR', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'EUR', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'EUR', value: 50, number: ' v1234567890'},
    ])
    const [newFilterValue, setNewVilterValue] = useState("All")


    let moneyCollander = money

    if (newFilterValue === 'Dollars') {
        moneyCollander = money.filter(element => element.banknots === 'Dollars')
    }
    if (newFilterValue === 'EUR') {
        moneyCollander = money.filter(element => element.banknots === 'EUR')
    }

    const onBtnClickHandlerForFilter = (filterValue: string) => {
            setNewVilterValue(filterValue)
    }

    return (
        <div style={{marginLeft: "50px", backgroundColor: 'orange'}}>
            <h1 style={{textAlign: "center"}}>Bankomat</h1>
            <table style={{border: "3px black solid"}}>
                {moneyCollander.map((element, index) => {
                    return (
                        <tr className={styles.td}>
                            <td className={styles.td}>{index}</td>
                            <td className={styles.td}>{element.banknots}</td>
                            <td className={styles.td}>{element.value}</td>
                            <td className={styles.td}>{element.number}</td>
                        </tr>
                    )
                })}

            </table>
            <div style={{textAlign: "center"}}>
                {/*<button className={styles.td} onClick={() => {onBtnClickHandlerForFilter("All")}}>All</button>
                <button className={styles.td} onClick={() => {onBtnClickHandlerForFilter("Dollars")}}>USD</button>
                <button className={styles.td} onClick={() => {onBtnClickHandlerForFilter("EUR")}}>Euro</button>*/}
                <Button name={"All"} callBack={()=>{onBtnClickHandlerForFilter ("All")}}/>
                <Button name={"USD"} callBack={()=>{onBtnClickHandlerForFilter ("Dollars")}}/>
                <Button name={"EUR"} callBack={()=>{onBtnClickHandlerForFilter ("EUR")}}/>

            </div>
        </div>
    )
}







