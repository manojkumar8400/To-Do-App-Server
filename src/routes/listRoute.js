const express = require('express');
const router = express.Router(); 
const { createNewList } = require('../controller/createController');
const { fetchAllList } = require('../controller/fetchListController');
const { editUpdateList } = require('../controller/editController');
const { deleteList } = require('../controller/deleteController');
const { deleteFullList } = require('../controller/deleteFullListController');
const { completeTask } = require('../controller/completeTaskController');
const { undoCompleteTask } = require('../controller/undoCompleteTaskController');
const { fetchCompletedTasks } = require('../controller/fetchCompleteTasksController');
const verifyToken = require('../middleware/verifyToken');

router.post('/create', verifyToken, createNewList);

router.get('/fetchData', fetchAllList);

router.put('/updateData/:_id', verifyToken, editUpdateList);

router.get('/fetchCompletedTasks', verifyToken, fetchCompletedTasks);

router.post('/completeTask/:_id', verifyToken, completeTask);

router.post('/undoCompleteTask/:_id', verifyToken, undoCompleteTask);

router.delete('/deleteData/:_id', verifyToken, deleteList);

router.delete('/deleteAllData', verifyToken, deleteFullList);

module.exports = router;