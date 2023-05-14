import React from 'react'
import './App.css'
import ToDoGallery from "./components/ToDoGallery"

function App() {
    return (
        <div className="App">
            <header>
                <h1>"TO-DO" - Board</h1>
                <ToDoGallery/>
            </header>
        </div>
    )
}

export default App
