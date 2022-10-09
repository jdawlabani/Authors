const AuthorController = require("../controllers/author.controllers")
const { getAllAuthors, getOneAuthor, addAuthor, updateAuthor, deleteAuthor } = AuthorController
module.exports = (app) => {
    app.get('/api/author', getAllAuthors)
    app.get('/api/author/:id', getOneAuthor)
    app.post('/api/author', addAuthor)
    app.put('/api/author/:id', updateAuthor)
    app.delete('/api/author/:id', deleteAuthor)
}
