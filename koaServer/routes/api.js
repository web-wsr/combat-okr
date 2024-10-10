const router = require('koa-router')()

router.prefix('/api')

const testController = require('../controllers/test')
const userController = require('../controllers/user')
const todoController = require('../controllers/todo')

router.get('/', testController.test)
router.post('/login', userController.login)
router.get('/todo', todoController.getTodoList)

module.exports = router