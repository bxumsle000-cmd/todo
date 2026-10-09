import {MdDelete} from "react-icons/md";
import { MdEdit } from "react-icons/md";

function Todo({todo, deleteTodo,toggleCompleted,changeEditing,editTodo}){

    return(
        <div className={`flex justify-between items-center   px-4 py-3 rounded-md mt-3
                         ${todo.isCompleted ? "bg-slate-700" : "bg-indigo-600"}`}>
            {todo.isEditing ? (
                    <input
                        className="flex-1 text-black px-2 rounded"
                        value={todo.content}
                        onChange={(e) => editTodo(todo.id, e.target.value)}
                        onKeyDown={(e) => { if (e.key === "Enter") changeEditing(todo.id,false); }}
                        onBlur={() => changeEditing(todo.id,false)}
                        autoFocus
                    />
                )
                :
                (<p onClick={()=> {toggleCompleted(todo.id)} }
                className={`flex-1 cursor-pointer ${todo.isCompleted ? "line-through" : ""}`}>
                {todo.content}</p>)
            }
            <div className="flex gap-1">
            <MdEdit className= "cursor-pointer" onClick={()=>{changeEditing(todo.id,true)}}></MdEdit>
            <MdDelete className="cursor-pointer" onClick={()=>{ deleteTodo(todo.id) }}></MdDelete>
            </div>
        </div>
    )
}

export default Todo;
