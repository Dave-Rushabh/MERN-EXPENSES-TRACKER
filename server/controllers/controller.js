const asyncHandler = require('express-async-handler')
const { Categories, Transactions } = require('../models/model')

// used to just post the data to the DB, won't be changed later
const postCategories = asyncHandler(async (req, res) => {
  const dataForDB = {
    type: 'Expenses',
    color: 'rgb(255, 205, 86)',
  }

  try {
    const data = await Categories.create(dataForDB)
    if (data) {
      res.json(data)
    }
  } catch (error) {
    res.status(400)
    throw new Error(error)
  }
})

// used to get the categories from the DB, sent back to frontend
const getCategories = asyncHandler(async (req, res) => {
  try {
    const allCategories = await Categories.find({})
    if (allCategories) {
      res.json(allCategories)
    }
  } catch (error) {
    res.status(400)
    throw new Error(error)
  }
})

module.exports = {
  postCategories,
  getCategories,
}
