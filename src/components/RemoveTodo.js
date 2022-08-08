export const RemoveTodo = ({ isChecked, setCompleted, handleClean }) => {

  const handleRemove = () => { if (window.confirm('Are you sure you want to delete the task?')) return handleClean() }

  return (
    <div>
      <input
        onChange={e => setCompleted(e.target.checked)}
        checked={isChecked}
        type='checkbox'
      />
      <label>Todo done 😊</label>
      <button onClick={handleRemove}>Clean</button>
    </div>
  )
}
