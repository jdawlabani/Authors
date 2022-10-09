const AuthorController = require("../controllers/author.controllers")
const { getAllAuthors, getOneAuthor, addAuthor, updateAuthor, deleteAuthor } = AuthorController
module.exports = (app) => {
    app.get('/api/allAuthors', getAllAuthors)
    app.get('/api/author/:id', getOneAuthor)
    app.post('api/addAuthor', addAuthor)
    app.put('/api/update/:id', updateAuthor)
    app.delete('/api/delete/:id', deleteAuthor)
}
