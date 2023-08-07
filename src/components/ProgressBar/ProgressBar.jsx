import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"

export function ProgressBar({listToDo, completedTasks}){

    // const porcentaje = 50
    const progressPercentage = (completedTasks / listToDo) * 100;

    return(<div>
        <div 
            className="progress" 
            role="progressbar" 
            aria-label="Basic example" 
            aria-valuenow={completedTasks} 
            aria-valuemin="0" 
            aria-valuemax={listToDo}
        >
            <div 
                className="progress-bar" 
                style={{width: `${progressPercentage}%`}}
            >
            </div>
        </div>
    </div>)
}