import { AiOutlineDelete } from "react-icons/ai";
import "./index.css"

const TodoApplicationItems = (props) => {
    const {ItemsContainer,DeleteItems} = props
    const {InputValue,id} = ItemsContainer 


    const onDelete = () => {
        DeleteItems(id)

    }
    return (
        <div class="items-container">
        <h1 className="items-heading">{InputValue}</h1>
        <button onClick={onDelete} className="delete-button"><AiOutlineDelete /></button>
        </div>
    )
}

export default TodoApplicationItems