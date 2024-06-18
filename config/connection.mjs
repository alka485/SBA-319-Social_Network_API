const {connect , connection} = require('mongoose');
// Wrap Mongoose around local connection to MongoDB
connect('mongodb://localhost/SBA319', {
    // Set Server Discover and Monitoring engine to true and avoids warning
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

// Export connection

module.exports = connection;