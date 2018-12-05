//Install express server
const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
var port_number = app.listen(process.env.PORT || 3001);

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/my-app'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname));
});

const server = http.createServer(app);

// Start the app by listening on the default Heroku port
server.listen(port_number, function() {
    console.log('listening on port ' + 3001);
});
