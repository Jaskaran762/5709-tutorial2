// utils/generateId.js
const generateId = () => {
    // Generate a random ID 
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

module.exports = generateId;
