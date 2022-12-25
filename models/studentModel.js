const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    dob: {
        required: true,
        type: String
    },
    age: {
        required: false,
        type: Number
    }
})
module.exports = mongoose.model('Student', studentSchema)