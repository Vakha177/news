const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    author: {type:String, required:true},
    text: String,
    newcomment: {
        type: mongoose.SchemaTypes.ObjectId,
        ref : 'News'
    }
})

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;