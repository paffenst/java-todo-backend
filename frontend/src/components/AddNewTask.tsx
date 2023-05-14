import React from 'react';

type AddNewTaskProps = {
    setInputName: (textInput: string) => void
}

function AddNewTask(props: AddNewTaskProps) {
    function InputText(event: React.FormEvent<HTMLInputElement>) {
        props.setInputName(event.currentTarget.value)
    }

    return (
        <div>
            <input type="text" onInput={InputText}/>
        </div>
    );
}

export default AddNewTask;