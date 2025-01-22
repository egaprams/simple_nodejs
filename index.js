const express = require('express');
const app = express();

// Port server diambil dari environment variable atau default ke 3000
const PORT = 3030;

// Endpoint root dengan response dinamis berdasarkan port
app.get('/', (req, res) => {
    res.send(`Hello from Server running on port ${PORT}!`);
});

// Menjalankan server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
