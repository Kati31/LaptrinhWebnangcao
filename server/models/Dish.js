const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true }, // Bắc, Trung, Nam
    price: { type: Number, required: true, min: 0 },
    description: { type: String },
    image: { type: String }, // URL ảnh
});

module.exports = mongoose.model('Dish', dishSchema);