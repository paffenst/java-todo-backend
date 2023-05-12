import axios from "axios"

export const getAllToDos = () => {
    axios.get('api/todo')
        .then(response => response.data)
}
