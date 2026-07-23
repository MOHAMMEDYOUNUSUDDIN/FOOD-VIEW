const mongoose = require("mongoose");
const dns = require('dns');

dns.setServers([
    '1.1.1.1',
    '8.8.8.8'
])

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB Connected");
    } catch (err) {
        console.log("Connection Error:", err.message);
        process.exit(1);
    }
}

module.exports = connectDB;