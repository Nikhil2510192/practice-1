const express = require('express');
const connectDB = require('./config/db');



const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
    console.log('server is running on port 8000');

});

app.use(express.json());

app.use("/api/users", require('./routes/userRoute')); 

app.listen(8000,async() =>{
    try{
        await connectDB();
        console.log('Server is running on port 8000');

    }catch(error) {
        console.log(error.message);
    }
});