import React from 'react'

export const TodoForm = () => {
  return (
  <form className="ToDoform">
    <input type="text" className="todo-input" placeholder="What is the task for today?" />
    <button type="submit" className='todo-btn'>
 </button>
    
</form>
  )
}

export default TodoForm
