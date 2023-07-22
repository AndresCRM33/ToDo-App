import React from "react";
import styles from "./NavBar.module.css"

export function NavBar(){
    return(<div className={styles.container}>
        <h1>ToDo App</h1>
        <ul>
            <li>About</li>
            <li>ToDo List</li>
        </ul>
    </div>)
}