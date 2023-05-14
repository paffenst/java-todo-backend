import React from 'react'
import './App.css'
import ToDoGallery from "./components/ToDoGallery"

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
