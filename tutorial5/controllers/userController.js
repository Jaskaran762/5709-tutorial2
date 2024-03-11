// controllers/userController.js
const User = require('../models/user');
const generateId = require('../utils/generateId')

let users = [];

const getAllUsers = (req, res) => {
    try {
        res.json({
            message: "Users retrieved",
            success: true,
            users: users
        });
    } catch (error) {
        console.error("Error in getAllUsers:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

const getUserById = (req, res) => {
    try {
        const userId = req.params.id;
        const user = users.find(u => u.id === userId);
        if (user) {
            res.json({
                success: true,
                user: user
            });
        } else {
            res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
    } catch (error) {
        console.error("Error in getUserById:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

const addUser = (req, res) => {
    try {
        const { email, firstName } = req.body;
        if (!email || !firstName) {
            return res.status(400).json({
                success: false,
                message: "Email and firstName are required"
            });
        }
        const newUser = new User(email, firstName, generateId());
        users.push(newUser);
        res.json({
            message: "User added",
            success: true
        });
    } catch (error) {
        console.error("Error in addUser:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

const updateUser = (req, res) => {
    try {
        const userId = req.params.id;
        const { email, firstName } = req.body;
        const userIndex = users.findIndex(u => u.id === userId);
        if (userIndex !== -1) {
            if (!email && !firstName) {
                return res.status(400).json({
                    success: false,
                    message: "At least one of email or firstName must be provided for update"
                });
            }
            if (email) {
                users[userIndex].email = email;
            }
            if (firstName) {
                users[userIndex].firstName = firstName;
            }
            res.json({
                message: "User updated",
                success: true
            });
        } else {
            res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
    } catch (error) {
        console.error("Error in updateUser:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    addUser,
    updateUser
};