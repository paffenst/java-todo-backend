import React, {useState} from 'react'
import {itemToDo} from '../model/itemToDo'
import toDoCard from './toDoCard'
import axios from "axios";
import ToDoCard from "./toDoCard";
//import itemToDo from '../model/itemToDo'
function ToDoBoardGallery() {

    const [toDoTasks , setToDoTasks] = useState<itemToDo[]>([])

    function addNewTask() {
        axios.post("/api/todo")
            .then(task => {
                setToDoTasks(task.data)
            })
    }

    function getAllTasks() {
        axios.get("/api/todo")
            .then(response => {setToDoTasks(response.data)})
    }

    return (
        <div className={"todosOverview"}>
            <button onClick={getAllTasks}>All Task</button>
            <div>{toDoTasks.map((currentTask:itemToDo) => <ToDoCard item={currentTask} key={currentTask.id} />)}

            </div>
        </div>
    )
}
export default ToDoBoardGallery;