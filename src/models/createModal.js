const mongoose = require('mongoose');

const createListSchema = new mongoose.Schema({
    userId: Number,
    title: String,
    description: String,
    priority: String,
    dueDate: String,
    createdAt: String,
});

module.exports = mongoose.model('List', createListSchema);