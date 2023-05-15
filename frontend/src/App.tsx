import React, {useState} from 'react'
import './App.css'
import ToDoGallery from "./components/ToDoGallery"
import axios from "axios";
import {ItemToDo} from "./model/ItemToDo";

//const [toDoTasks, setToDoTasks] = useState<ItemToDo[]>([])
//const [todo ,setTodos] = useState()
function getAllTodos():void {
    axios.get("/api/todo")
        .then(response => response.data)
}
function App() {
    return (
        <div className="App">
            <header>
                <h2>"TO-DO" - Board</h2>
                <ToDoGallery/>
            </header>
        </div>
    )
}

export default App
