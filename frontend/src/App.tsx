import React, {ChangeEvent, useEffect, useState} from 'react'
import './App.css'
import {itemToDo} from "./model/itemToDo"
import axios from "axios"
import ToDoGallery from "./components/toDoGallery"
function App() {

    const [items, setItems] = useState<itemToDo[]>([])
    const [modalIsOpen, setModalIsOpen] = useState(false)

    function addToDo() {
       setItems(items)
    }
    const openModal = () => {
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Cool ToDo - Board</h1>
                <ToDoGallery />
            </header>
        </div>
    )
}

export default App
