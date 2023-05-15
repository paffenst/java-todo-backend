import React, {useState} from 'react';
import axios from 'axios';
import {ItemToDo} from '../model/ItemToDo';
import '../styles/ToDoCard.css';
import ModalInputWindow from "./ModalInputWindow"
import {getItems} from "react-bootstrap-typeahead/types/tests/helpers";

type ToDoCardProps = {
    item: ItemToDo;
    getTasks: () => void;
};

function TodoCard(props: ToDoCardProps) {
    const [description, setDescription] = useState(props.item.description);
    const deleteById = () => {
        axios.delete(`/api/todo/${props.item.id}`).then(props.getTasks)
    }

    const updateById = () => {
        axios.put(`/api/todo/${props.item.id}`, {
            description,
            status: props.item.status,
            id: props.item.id,
        }).then(props.getTasks);
    }

    const advanceStatus = () => {
        const newStatus =
            props.item.status === 'OPEN' ? 'IN_PROGRESS' : 'DONE';
        axios.put(`/api/todo/${props.item.id}`, {
            description: props.item.description,
            status: newStatus,
            id: props.item.id,
        }).then(props.getTasks);
    }
    return (
        <div className="ToDoCard" key={props.item.id}>
            <h2>{props.item.description}</h2>
            <div>
                <p>Edit a description:</p>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button className={"text-bg-end"} onClick={updateById}>Edit text</button>
                {  props.item.status === 'DONE' ? (
                    <button className={"text-bg-danger"} onClick={deleteById}>Delete</button>
                ) : (
                    <button className={"text-bg-info "}onClick={advanceStatus}>Advance</button>
                )}
            </div>
        </div>
    )
}
export default TodoCard;