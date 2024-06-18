// Import express package
const express = require('express');
const PORT = 4000;
// Initialize our app variable by setting it to the value of express()
const app = express();
// Listen for connections
app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}`);
});