import { TodoRows } from './TodoRows'

export const ListTodo = ({ elements, toggleTodo, completedTodo = false }) => {

  const mapTable = value => {
    return (
      elements
        .filter(e => e.done === value)
        .map(e => <TodoRows e={e} key={e.name} toggleTodo={toggleTodo} />)
    )
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>
        {mapTable(completedTodo)}
      </tbody>
    </table>
  )
}
