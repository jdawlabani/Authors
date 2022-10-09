const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: [
            true,
            "name is required"
        ],
        minLength: [
            3,
            "name must be 3 characters or more"
        ] 
    },
}, { timestamps: true });


module.exports = mongoose.model('Author', AuthorSchema);

