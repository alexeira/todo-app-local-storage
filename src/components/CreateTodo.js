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
    <form onSubmit={handleSubmit} className='mb-6'>
      <p className='text-xs font-inter text-gray-400 mb-0.5'>New task</p>
      <div className='flex'>
        <input
          className='mr-4 pl-1 text-gray-700/90 shadow-sm border border-1 border-gray-200 rounded-md outline-none placeholder:italic'
          onChange={evt => setTodo(evt.target.value)}
          value={todo}
          type='text'
          autoFocus
          required
        />
        <button className='px-3 py-1 shadow shadow-orange-700/40 text-gray-200 bg-orange-400 rounded-full font-inter text-sm transition-colors transition-200 hover:bg-orange-600/90'>Save</button>
      </div>
    </form>
  )
}
