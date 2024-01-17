import React, { useState } from 'react'


export const TodoForm = () => {
    const [value, setValue] = useState("");
    const handleSubmit = e => {
        
    }
    
  return (
  <form className="ToDoform" onSubmit={handleSubmit}>
    <input type="text" className="todo-input" placeholder="What is the task for today?" 
    onChange={(e) => setValue(e.target.value)} />
    <button type="submit" className='todo-btn'>Add Task
 </button>
    
</form>
  )
}

export default TodoForm 
