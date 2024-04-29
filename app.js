const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();
const port = process.env.PORT || 8082;
const mongoose = require('mongoose');
const cors = require('cors');
const items = require('./routes/api/items');
app.use('/api/items', items);
app.use(bodyParser.json());
app.use(cors({origin: true, credentials: true}));
// app.use(express.json({extended: false}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/home', (req, res) => res.send("home"));
app.get('/', (req, res) => res.send("WELCOME TO BACKEND :P"));
const connectionString = 'mongodb+srv://TheRyanMajd:Uz3P7Gz8ytnIvEgV@webprogrammingcluster0.j26q8gr.mongodb.net/?retryWrites=true&w=majority&appName=webProgrammingCluster0';
mongoose.set('strictQuery', false);
mongoose.connect(connectionString).then(()=> {
    app.listen(port, () => console.log(`Server running on port ${port}`));
}).catch(err => {
    console.log('IT BROKEN 💩!');
});




