import React, {useEffect, useState} from 'react';
import AddNewTask from './AddNewTask';
import axios from 'axios';
import {ItemToDo} from '../model/ItemToDo';
import ToDoCard from "./ToDoCard";
import '../styles/ToDoGallery.css';
//import {Simulate} from "react-dom/test-utils";
//import error = Simulate.error;

function TodoGallery() {
    const [inputName, setInputName] = useState(" ");
    const [toDoTasks, setToDoTasks] = useState<ItemToDo[]>([])

    useEffect(() => {
        axios.get('/api/todo').then(({data}) => setToDoTasks(data));
    }, []);

    function getAllTasks() {
        axios.get("/api/todo")
            .then(response => {
                setToDoTasks(response.data)
            }).catch(error => console.log(error.message()))
    }
    const filterTasks = (status: string) => toDoTasks.filter((item) => item.status.includes(status));

    const renderTasks = (status: string) => filterTasks(status).map((item) => <ToDoCard item={item}
                                                                                        getTasks={() => axios.get('/api/todo').then(({data}) => setToDoTasks(data))}/>);
    return (
        <div className="ui container">
            <div className="ui md-grid ">
                <div className="input-group-md">
                    <p>Add a new Task:</p>
                    <AddNewTask setInputName={setInputName}/>
                    <button className="text-bg-success " onClick={() => axios.post('/api/todo', {
                        description: inputName,
                        status: 'OPEN'
                    }).then(() => getAllTasks()).catch(error => console.log(error))}>Add
                    </button>
                </div>

                <div className=" gallery ">
                    <div>
                        <h2>Open:</h2>
                        {renderTasks('OPEN')}
                    </div>
                    <div>
                        <h2>In progress:</h2>
                        {renderTasks('IN_PROGRESS')}
                    </div>
                    <div>
                        <h2>Done:</h2>
                        {renderTasks('DONE')}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoGallery;
