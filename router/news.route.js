const {Router}= require('express')
const { newsControllers } = require('../controllers/news.controller')
//const { newsControllers} = require('../controller/news.cotroller')

router = Router()

router.post('/news' , newsControllers.postNews)
router.get('/news', newsControllers.getNews )
router.get('/news/:id' , newsControllers.getNewsById)
router.get('/news/category/:id' , newsControllers.getNewsByCategory)

module.exports = router