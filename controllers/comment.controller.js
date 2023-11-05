const Comment = require("../models/Comment.model");

module.exports.commentController = {
  postComment: (req, res) => {
    const {author, text, newsId} = req.body
    Comment.create({
    author,
    text,
    newsId
    })
      .then((data) => res.json(data))
      .catch((error) => res.json(error))
  },
  deleteComment: (req,res) => {
    Comment.findByIdAndDelete(req.params.id)
    .then((data) =>res.json('Удалено'))
  },
  getCommentByNews: (req, res) => {
    Comment.find({newСomment: req.params.newId})
      .populate("newСomment")
      .then((data) => {
        res.json(data);
      });
  },
  }