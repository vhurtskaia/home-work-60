/**
 * User Routes
 * Визначає всі маршрути для користувачів
 */

const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Маршрути для /users
router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);

// Маршрути для /users/:userId
router.get('/:userId', userController.getUserById);
router.put('/:userId', userController.updateUserById);
router.delete('/:userId', userController.deleteUserById);

module.exports = router;
