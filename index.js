const express = require("express")
const mongoose = require('mongoose')
const app = express()
const port = 3000 ;

app.use(express.json())

app.use(require("./router/news.route"));
app.use(require('./router/comment.route'))

mongoose.connect(
    "mongodb+srv://sheikh2003:Seida59522@cluster0.jqbmwip.mongodb.net/news",
  )
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));


app.listen(3000, () => console.log('Сервер успешно подключен'))
