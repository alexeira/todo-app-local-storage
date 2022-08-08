export const TodoRows = ({ e, toggleTodo }) => {

  return (
    <tr>
      <td>
        {e.name}
        <input
          onChange={() => toggleTodo(e)}
          checked={e.done}
          type='checkbox'
        />
      </td>
    </tr>
  )
}
