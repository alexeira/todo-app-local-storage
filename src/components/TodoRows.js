export const TodoRows = ({ e, toggleTodo }) => {

  return (
    <tr className='border-b last:border-none'>
      <td className='flex items-center break-all'>
        <input
          className='mx-2 w-4 h-4 bg-sky-500 rounded'
          onChange={() => toggleTodo(e)}
          checked={e.done}
          type='checkbox'
        />
        {e.name}
      </td>
    </tr>
  )
}
