import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseURL = 'http://localhost:5000/api'

const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: builder => ({
    // get categories
    getCategories: builder.query({
      query: () => '/categories', // builder.query() by default uses GET method
    }),

    // get transactions
    getTransactions: builder.query({
      query: () => '/transaction', // builder.query() by default uses GET method
    }),

    // add new transaction
    addTransaction: builder.mutation({
      query: userInputValues => ({
        url: '/transaction',
        method: 'POST',
        body: userInputValues,
      }), // builder.mutation() is used for POST, DELETE & PUT methods
    }),

    //delete a transaction
    deleteTransaction: builder.mutation({
      query: transactionID => ({
        url: `/transaction/:${transactionID}`,
        method: 'DELETE',
        body: transactionID,
      }),
    }),
  }),
})

export default apiSlice
