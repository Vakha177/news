const Category = require("../models/Categories.model");

module.exports.categoriesController = {
  getCategories: (req, res) => {
    Category.find()
      .then((data) => res.json(data))
      .catch((error) => res.json(error));
  },

  postCategories: (req, res) => {
    Category.create({
      name: req.body.name,
    })
      .then((data) => res.json(data))
      .catch((error) => res.json(error));
  },
  deleteCategories: (req, res) => {
    Category.findByIdAndDelete(req.params.id)
    .then((data) =>res.json('Категория удалена'))
  }
}