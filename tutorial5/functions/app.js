// app.js
const express = require('express');
// for netlify
import serverless from "serverless-http";

const bodyParser = require('body-parser');
const userRoutes = require('../routes/userRoutes');

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/users', userRoutes);

/* // Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
 */

// for netlify
export const handler = serverless(api);