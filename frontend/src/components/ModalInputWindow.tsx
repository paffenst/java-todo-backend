import React from 'react';
import Modal from 'react-modal';
import {ItemToDo} from '../model/ItemToDo';

type Props = {
    item: ItemToDo;
    closeModal: () => void;
};
const ModalInputWindow: React.FC<Props> = ({item, closeModal }) => {
    return (
        <Modal isOpen={true} onRequestClose={closeModal}>
            <h2>Items Details:</h2>
            <p>Id: {item.id}</p>
            <p>Description: {item.description}</p>
            <p>Status: {item.status}</p>
            <button className="rbt-close" onClick={closeModal}>Close</button>
        </Modal>
    );
};

export default ModalInputWindow;