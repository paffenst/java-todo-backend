import React, {useEffect, useState} from 'react';
import AddNewTask from './AddNewTask';
import axios from 'axios';
import {ItemToDo} from '../model/ItemToDo';
import ToDoCard from "./ToDoCard";

function TodoGallery() {
    const [inputName, setInputName] = useState('');
    const [toDoTasks, setToDoTasks] = useState<ItemToDo[]>([])

    useEffect(() => {
        axios.get('/api/todo').then(({data}) => setToDoTasks(data));
    }, []);

    function getAllTasks() {
        axios.get("/api/todo")
            .then(response => {
                setToDoTasks(response.data)
            })
    }

    const filterTasks = (status: string) => toDoTasks.filter((item) => item.status.includes(status));

    const renderTasks = (status: string) => filterTasks(status).map((item) => <ToDoCard item={item}
                                                                                        getTasks={() => axios.get('/api/todo').then(({data}) => setToDoTasks(data))}/>);

    return (
        <div className="col-md-3 m-auto ">
            <p>Add a new Task:</p>
            <AddNewTask setInputName={setInputName}/>
            <button onClick={() => axios.post('/api/todo', {
                description: inputName,
                status: 'OPEN'
            }).then(() => getAllTasks())}>Add
            </button>
            <h2>Open:</h2>
            {renderTasks('OPEN')}
            <h2>In progress:</h2>
            {renderTasks('IN_PROGRESS')}
            <h2>Done:</h2>
            {renderTasks('DONE')}
        </div>
    );
}

export default TodoGallery;
