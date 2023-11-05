const News = require('../models/News.model') ;

module.exports.newsControllers = {
    postNews : (req , res) => {
        const { title , text , categoryId} = req.body
        News.create({
            title,
            text , 
            categoryId
        })
      .then((data) => res.json (data))
      .catch((error) => res.json(error))
    } , 
    getNews : (req , res) => {
        News.find ()
        .then((data) => res.json(data))
        .catch((error) => res.json(error))
    } , 
    getNewsById : (req , res) => {
        News.findById(req.params.Id)
        .then((data) => res.json(data))
        .catch((error) => res.json(error))
    },
    getNewsByCategory: (req, res) => {
        News.find({categoryId : req.params.id}).populate('categoryId')
        .then((data) => res.json(data))
        .catch((error) => res.json(error))
    }
}