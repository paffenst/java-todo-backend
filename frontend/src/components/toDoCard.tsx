import React from 'react';
import {itemToDo} from "../model/itemToDo";

type toDoCardProps = {
    item: itemToDo
}

function toDoCard(props: toDoCardProps) {

    return (
        <div className='item'>
            <h2>{props.item.status}</h2>
            <h2>{props.item.description}</h2>
            <h2>{props.item.id}</h2>
        </div>
    );
}
export default toDoCard;