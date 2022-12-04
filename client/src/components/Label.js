import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { default as api } from '../redux/apiSlice'
import { addCategoriesToStore, addTransactionsToStore } from '../redux/reduxer'

// const calculateShareFromTransactionType

// TODO : calculate % later, currently set as 0 bu default
const LableComponentJSX = ({ type, color = 'tomato', percent = '0%' }) => (
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
  const dispatch = useDispatch()
  const {
    categories: categoriesFromStore,
    transactions: transactionsFromStore,
  } = useSelector(state => state.expensesReducer)

  console.log({ categoriesFromStore, transactionsFromStore })

  const { data: categories } = api.useGetCategoriesQuery()
  const { data: transactions } = api.useGetTransactionsQuery()

  useEffect(() => {
    if (categories) {
      dispatch(addCategoriesToStore(categories))
    }
  }, [categories, dispatch])

  useEffect(() => {
    if (transactions) {
      dispatch(addTransactionsToStore(transactions))
    }
  }, [transactions, dispatch])

  return (
    <>
      {transactionsFromStore.map(label => (
        <LableComponentJSX
          key={Math.random()} // TODO : apply proper key later
          type={label.type}
        />
      ))}
    </>
  )
}

export default Label
