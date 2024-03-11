// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users', userController.getAllUsers);
router.get('/user/:id', userController.getUserById);
router.post('/add', userController.addUser);
router.put('/update/:id', userController.updateUser);

module.exports = router;
