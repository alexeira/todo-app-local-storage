export const RemoveTodo = ({ isChecked, setCompleted, handleClean }) => {

  const handleRemove = () => { if (window.confirm('Are you sure you want to delete the task?')) return handleClean() }

  return (
    <div className='flex justify-between w-72 mb-4'>
      <label className='px-4 py-1 bg-sky-500 text-gray-200 font-inter text-sm rounded shadow shadow-sky-500/70 cursor-pointer transition-colors duration-200 hover:bg-sky-600'>
        Completed
        <input
          className='appearance-none'
          onChange={e => setCompleted(e.target.checked)}
          checked={isChecked}
          type='checkbox'
          name='done'
        />
      </label>
      <button
        className='px-4 py-1 bg-rose-400 text-gray-200 font-inter text-sm rounded shadow shadow-rose-500/70 transition-colors duration-200 hover:bg-rose-500'
        onClick={handleRemove}>Clean</button>
    </div>
  )
}
