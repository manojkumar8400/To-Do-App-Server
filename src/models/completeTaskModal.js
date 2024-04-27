const mongoose = require('mongoose');

const completeTaskSchema = new mongoose.Schema({
    userId: Number,
    title: String,
    description: String,
    priority: String,
    dueDate: String
});

module.exports = mongoose.model('CompleteTask', completeTaskSchema);