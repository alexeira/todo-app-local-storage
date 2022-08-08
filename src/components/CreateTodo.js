import { useState } from 'react'

export const CreateTodo = ({ createTodo }) => {

  const [todo, setTodo] = useState('')

  const handleSubmit = evt => {
    evt.preventDefault()
    createTodo(todo)
    localStorage.setItem('todo', todo)
    setTodo('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={evt => setTodo(evt.target.value)}
        value={todo}
        type='text'
        placeholder='Enter a new task'
        required
      />
      <button>Save Task</button>
    </form>
  )
}
