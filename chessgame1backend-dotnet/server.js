const express = require('express');
// Loads the Express web framework
const app = express();
// Creates yor web app (server instance)
const bodyParser = require('body-parser');
// Loads middleware to readJSON from requests
const gameRoutes = require('./routes/gameRoutes');
// Loads your game's API routes (like /move, /new)

app.use(bodyParser.json());
// Tells Express to parse incoming JSON data
app.use('api/game', gameRoutes);
// Sets up your game API uneder /api/game/*

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server running on port ${PORT}');
});
// Starts the sever and listens for connections

/* After running node server.js: 
* Your backend is running on http://localhost:3000
* You can access:
* POST /api/game/new to start game
* POST /api/game/move to make a move
* GET /api/game/state to get the current board state
*/

/* Why you need it?
* Without a server.js, your app wouldn't:
* Start a server
* Handle HTTP requests
* Respond to client requests
* Route requests to the appropriate handlers
* This is essential for a web application to work
*/