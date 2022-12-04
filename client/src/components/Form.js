import React from 'react'
import { useForm } from 'react-hook-form'
import List from './List'

const Form = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = data => {}

  return (
    <>
      <div className='form max-w-sm mx-auto w-96'>
        <h1 className='font-bold pb-4 text-xl'>Transactions</h1>
        <form
          id='form'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='grid gap-4'>
            <div className='input-group'>
              <input
                type='text'
                placeholder='Expenses/Savings/Investments'
                className='form-input'
                {...register('name')}
              />
            </div>
            <select
              className='form-input'
              defaultValue='select from below'
              {...register('type')}
            >
              <option
                value='select from below'
                disabled
              >
                Select From Below
              </option>
              <option value='Savings'>Savings</option>
              <option value='Investments'>Investments</option>
              <option value='Expenses'>Expenses</option>
            </select>
            <div className='input-group'>
              <input
                type='text'
                placeholder='Amount in &#8377;'
                className='form-input'
                {...register('amount')}
              />
            </div>
            <div className='submit-btn'>
              <button className='border rounded-lg py-2 text-white bg-indigo-500 w-full'>
                Make Transaction
              </button>
            </div>
          </div>
        </form>
        <List />
      </div>
    </>
  )
}

export default Form
