const router = require('express').Router()
const { getCategories, postCategories } = require('../controllers/controller')

//creating the endpoints
router.route('/categories').get(getCategories).post(postCategories)

module.exports = router
