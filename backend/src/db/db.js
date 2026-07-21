const mongoose = require("mongoose");
const dns = require('dns');

dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])

async function connectDB() {
    try {
        await mongoose.connect(
            "mongodb+srv://younus:younus0786@backend.gqi03kn.mongodb.net/food&view"
        );

        console.log("MongoDB Connected");
    } catch (err) {
        console.log("Connection Error:", err.message);
        process.exit(1);
    }
}

module.exports = connectDB;