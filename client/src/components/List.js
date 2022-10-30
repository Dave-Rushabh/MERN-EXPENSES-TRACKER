import React from 'react'

const listCollection = [
  {
    name: 'Savings',
    color: 'rgb(255, 99, 132)',
    id: 1,
  },
  {
    name: 'Investments',
    color: 'rgb(54, 162, 235)',
    id: 2,
  },
  {
    name: 'Expenses',
    color: 'rgb(255, 205, 86)',
    id: 3,
  },
]

const TransactionsHistoryJSX = ({ name, color }) => (
  <>
    <div
      className='item flex justify-center bg-gray-50 py-2 rounded-r'
      style={{ borderRight: `8px solid ${color}` }}
    >
      <button className='px-3 bg-slate-600 rounded-lg text-white'>
        Delete
      </button>
      <span className='block w-full'>{name}</span>
    </div>
  </>
)
const List = () => {
  return (
    <>
      <div className='flex flex-col py-6 gap-3'>
        <h1 className='py-4 font-bold text-xl '>History</h1>
        {listCollection.map(list => (
          <TransactionsHistoryJSX
            key={list.id}
            name={list.name}
            color={list.color}
          />
        ))}
      </div>
    </>
  )
}

export default List
