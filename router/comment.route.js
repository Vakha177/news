const { Router } = require('express')
const { commentController } = require('../controllers/comment.controller')


router = Router()


router.post('/comment', commentController.postComment) 
router.delete('/comment/:id', commentController.deleteComment) 
router.get('/comment/news/:id', commentController.getCommentByNews) 

module.exports=router