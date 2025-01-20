const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://nikhil:1234567q@cluster0.47zgk.mongodb.net/data2");
        console.log(`MongoDB is connected : ${conn.connection.host}`);
    } catch (error) {
        console.error(error);
        process.exit(1)
    }
};

module.exports = connectDB;