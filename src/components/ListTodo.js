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
    <div>
      <p className='pb-1 font-inter text-gray-400 font-light text-xs text-left'>Tasks</p>
      <div className='border border-1 shadow-sm rounded-md mb-4'>
        <table className='w-72 table-fixed'>
          <tbody className='font-inter text-sm text-gray-900/80'>
            {mapTable(completedTodo)}
          </tbody>
        </table>
      </div>
    </div>
  )
}
