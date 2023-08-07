import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"

export function ProgressBar({listToDo, completedTasks}){

    // const porcentaje = 50
    const progressPercentage = (completedTasks / listToDo) * 100;

    return(<div className="container">
        <div 
            className="progress" 
            role="progressbar" 
            aria-label="Basic example" 
            aria-valuenow={completedTasks} 
            aria-valuemin="0" 
            aria-valuemax={listToDo}
        >
            <div 
                className="progress-bar bg-danger" 
                style={{width: `${progressPercentage}%`}}
            >
            {completedTasks}/{listToDo}
            </div>
        </div>
    </div>)
}