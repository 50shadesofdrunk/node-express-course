const express = require('express');
const app = express();
const tasks = require('./routes/tasks'); // Corrected the import path

// Middleware
app.use(express.json()); // Middleware for parsing JSON

// Routes
app.get('/hello', (req, res) => {
    res.send('Task Manager App');
});

app.use('/api/v1/tasks', tasks);

const port = 3000;

app.listen(port, () => console.log(`Server is listening on port ${port}...`)); // Corrected syntax for template literal
