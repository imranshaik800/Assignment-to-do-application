import {useState,useEffect} from "react"
import {v4 as uuidv4} from "uuid"
import TodoApplicationItems from "../TodoApplicationItems"
import "./index.css"



const SaveButton = () => {
    const LocalList = localStorage.getItem("list");
    if (LocalList) {
        return JSON.parse(localStorage.getItem("list"))
    } else {
        return []
    }
}

const TodoApplication = () => {

    const [InputValue,setInputValue] = useState("")
    const [InputArray,setInputArray] = useState(SaveButton())

    const InputElement = (event) => {
        setInputValue(event.target.value)
    } 




    const CreateButton = (event) => {
        event.preventDefault() 
        const newItem = {
            id : uuidv4(),
            InputValue,
        } 
        setInputArray((previousList) => ([...previousList,newItem]))
        setInputValue("")
    }

    function DeleteItems(id) {
        const NewList = InputArray.filter((each) => each.id !== id)
        setInputArray(NewList)
    }

    useEffect(() => {
        localStorage.setItem("list",JSON.stringify(InputArray))
    },[InputArray])

    return (
        <div className="bg-container">
            <h1 className="main-heading">TO-DO-APPLICATION</h1>
            <div className="todo-card-container">
            <form onSubmit={CreateButton}>
                <input onChange={InputElement} value={InputValue} className="input-element" placeholder="Enter a Text"type="text"/> 
                <button type="submit" className="add-button">Add</button>    
            </form>
            {InputArray.map((eachItem) => (<TodoApplicationItems key={eachItem.id} ItemsContainer={eachItem} DeleteItems={DeleteItems}/>))}
            </div>
            <button className="save-button" onClick={SaveButton}>Save</button> 
        </div>
    )
} 


export default TodoApplication