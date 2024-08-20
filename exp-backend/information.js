const mongoose = require('mongoose');
const user = new mongoose.Schema(
    {
        itemName: {
            type: String,
            required: true,
            maxLength: 10
        },
        prize: {
            type: String,
            required: true,
            maxLength: 15
        },
        date: {
            type: String,
            required: true,
            maxLength: 20
        }
    }
)

module.exports = mongoose.model('userItem', user)
