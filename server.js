const express = require('express')
const app = express()
const router = express.Router();

const PORT = process.env.PORT || 5000 
const expressServer = app.listen(PORT, '0.0.0.0', () => {
    console.log('Server is running s on port: ' + PORT)
});

app.use(express.static(__dirname + '/public'));
