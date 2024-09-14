const express = require('express');
const cors = require('cors');

// Constant
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(cors())
app.get('/', (req, res) => {
    res.send({
        "courses": [
            "HTML",
            "CSS",
            "Docker",
            "OOP"
        ]
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);