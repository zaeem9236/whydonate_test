const express = require('express'); // import express package
const app = express(); // assign express functions in app variable
const port = process.env.PORT || 5000; // server port set to 5000 (localserver) or server provided port

// import of routes
const connect = require('./routes/connect.js');

// import of express controllers/custom middlewares
const {initialise_db} = require('./controllers/initialise_db'); 


app.use('/', connect) // run root route

app.get('*', (req, res) => { // run error message on invalid/undefined route
    res.status(404).send({ message: 'invalid Request', status: '400' })
})

app.listen(port, () => { // start listening to server with console message
    console.log(`listening to localhost:${port}`)
    initialise_db()
})