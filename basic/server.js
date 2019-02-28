import express from "express";
import bodyParser from "body-parser";
import cors from "cors"; 
import morgan from 'morgan';
var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');
const port = 3000;  
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)); 
//Index route
app.get('/users', (req, res) => {
    res.send('users');
});
app.get('/', (req, res) => {
    res.send('Invalid endpoint!');
});

app.listen(port, () => {
    console.log('server started - ', port);
});