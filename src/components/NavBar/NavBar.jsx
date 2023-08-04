import React from "react";
import styles from "./NavBar.module.css"
import Swal from "sweetalert2";


export function NavBar(){

    function onClickAbout(){
        Swal.fire("Esta es una app para anotar tus tareas, puedes agregarlas y eliminarlas, también puedes marcarlas como completadas y no compledas usando la x que está al lado izquierdo de cada tarea", "", "info")
    }

    return(<div className={styles.container}>
        <h1 className={styles.logo}>ToDo App</h1>
        <ul className={styles.menuNav}>
            <li onClick={() => onClickAbout()}>About</li>
        </ul>
    </div>)
}