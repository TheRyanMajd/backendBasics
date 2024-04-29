const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true,
    },
    description: { // Corrected typo here
        type: String,
    },
    image: {
        type: String,
    },
    update_date: {
        type: Date,
        default: new Date(),
    }
});

const Item = mongoose.model('Item', ItemSchema);
module.exports = Item;
