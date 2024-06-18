const {connect , connection} = require('mongoose');

connect('mongodb://localhost/SBA319', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

module.exports = connection;