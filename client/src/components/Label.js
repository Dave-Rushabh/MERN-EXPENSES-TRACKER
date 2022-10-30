import React from 'react'

const labelsCollection = [
  {
    type: 'Savings',
    color: 'rgb(255, 99, 132)',
    percent: '45%',
    id: 1,
  },
  {
    type: 'Investments',
    color: 'rgb(54, 162, 235)',
    percent: '20%',
    id: 2,
  },
  {
    type: 'Expenses',
    color: 'rgb(255, 205, 86)',
    percent: '35%',
    id: 3,
  },
]

const LableComponentJSX = ({ type, color, percent }) => (
  <div className='labels flex justify-between'>
    <div className='flex gap-2'>
      <div
        className='w-2 h-2 rounded py-3'
        style={{ backgroundColor: `${color}` }}
      ></div>
      <h3 className='text-lg'>{type}</h3>
    </div>
    <h3 className='font-bold'>{percent}</h3>
  </div>
)

const Label = () => {
  return (
    <>
      {labelsCollection.map(label => (
        <LableComponentJSX
          key={label.id}
          type={label.type}
          color={label.color}
          percent={label.percent}
        />
      ))}
    </>
  )
}

export default Label
