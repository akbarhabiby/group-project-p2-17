const router = require('express').Router()
const AppController = require('../controllers/app-controller')

router.get('/', AppController.getIndex)

module.exports = router