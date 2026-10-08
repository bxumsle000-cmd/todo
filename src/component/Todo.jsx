import {MdDelete} from "react-icons/md";
import { MdEdit } from "react-icons/md";

function Todo({todo, deleteTodo,toggleCompleted}){
    return(
        <div className={`flex justify-between items-center bg-indigo-600  px-4 py-3 rounded-md mt-3
                         ${todo.isCompleted ? "bg-slate-700" : "bg-indigo-600}"}`}>

            <p onClick={()=> {toggleCompleted(todo.id)} }
                className={`flex-1 cursor-pointer ${todo.isCompleted ? "line-through" : ""}`}>
                {todo.content}</p>

            <div className="flex gap-1">
            <MdEdit className= "cursor-pointer"></MdEdit>
            <MdDelete className="cursor-pointer" onClick={()=>{ deleteTodo(todo.id) }}></MdDelete>
            </div>
        </div>
    )
}

export default Todo;
