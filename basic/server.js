import express from "express";
import bodyParser from "body-parser";
import cors from "cors"; 
import morgan from 'morgan';

const port = 3000;  
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

//Index route
app.get('/', (req, res) => {
    res.send('Invalid endpoint!');
});


app.listen(port, () => {
    console.log('server started - ', port);
});