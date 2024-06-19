// Import express package
const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = 4000;
// Initialize our app variable by setting it to the value of express()
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);

// Listen for connections
db.once('open' , () => {
    app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}`);
    });
})
