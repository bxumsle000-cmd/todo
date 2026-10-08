import {useState} from "react";
import CreateForm from "./CreateForm.jsx";
import Todo from "./Todo.jsx";

function TodoWrapper(){
    const [todos , setTodos] = useState([
            {content:"寫作業", id:0,isCompleted:false},
        {content:"洗衣服", id:1,isCompleted:false}
    ]);

    const addTodo = (content)=>{
        setTodos([...todos,{content:content,id:Date.now()}])
    }
    const deleteTodo = (id)=>{
        setTodos(todos.filter((todo)=> {return todo.id !== id} ))
    }

    const toggleCompleted = (id)=>{
        setTodos(todos.map( (todo) =>{
            return  todo.id === id
                ? {...todo,isCompleted: !todo.isCompleted}
                : todo
        }))
    }


    return <div className="bg-indigo-950 w-full max-w-md mx-auto mt-20 p-8 rounded-lg shadow-2xl">
        <h1 className="text-3xl font-bold text-white text-center mb-6">待辦事項</h1>

        <CreateForm addTodo={addTodo}></CreateForm>

        {todos.map((todo)=>{
            return <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} toggleCompleted={toggleCompleted}></Todo>
        })}
    </div>
}

export default TodoWrapper;
