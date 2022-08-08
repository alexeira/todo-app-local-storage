import { useEffect, useState } from 'react'
import { CreateTodo } from './components/CreateTodo'
import { ListTodo } from './components/ListTodo'
import { RemoveTodo } from './components/RemoveTodo'

export default function App() {

  const [elements, setElements] = useState([])
  const [completed, setCompleted] = useState(false)

  const createTodo = todo => {
    if (!elements.find(e => e.name === todo)) {
      setElements([...elements, { name: todo, done: false }])
    }
  }

  const toggleTodo = todo => {
    setElements(elements.map(e => e.name === todo.name ? { ...todo, done: !e.done } : e))
  }

  const handleClean = () => {
    setElements(elements.filter(e => !e.done))
    setCompleted(false)
  }

  useEffect(() => {
    let data = localStorage.getItem('todo')
    if (data) return setElements(JSON.parse(data))
  }, [])

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(elements))
  }, [elements])

  return (
    <div>
      <CreateTodo createTodo={createTodo} />
      <ListTodo
        elements={elements}
        toggleTodo={toggleTodo}
      />
      <RemoveTodo
        isChecked={completed}
        setCompleted={checked => setCompleted(checked)}
        handleClean={handleClean}
      />
      {completed && (
        <ListTodo
          elements={elements}
          toggleTodo={toggleTodo}
          completedTodo={completed}
        />
      )}
    </div>
  )
}
