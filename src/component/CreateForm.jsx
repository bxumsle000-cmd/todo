import {useState} from "react";

function CreateForm({addTodo}){
    const [content , setContent] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        addTodo(content);
    }

    return (<div className="mb-6">
        <form className="flex" onSubmit={handleSubmit}>
            <input type="text" placeholder="請輸入代辦事項"
                   value={content}  onChange={(e)=>{ setContent(e.target.value) }}
                   className="flex-1  border border-indigo-500 rounded-l-md px-3 py-2"/>
            <button className="bg-indigo-600 hover:bg-indigo-500 px-4 rounded-r-md cursor-pointer"
            >加入</button>
        </form>
    </div>);
}

export default CreateForm;
