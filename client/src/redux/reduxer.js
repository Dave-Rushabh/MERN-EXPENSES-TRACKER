import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categories: [],
  transactions: [],
}

const expensesReducer = createSlice({
  name: 'expensesReducer',
  initialState,
  reducers: {
    addCategoriesToStore: (state, { payload }) => {
      state.categories = payload
    },
    addTransactionsToStore: (state, { payload }) => {
      state.transactions = payload
    },
  },
})

export default expensesReducer.reducer
export const { addCategoriesToStore, addTransactionsToStore } =
  expensesReducer.actions
