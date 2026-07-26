const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const authRoutes = require("./routes/auth.routes");
const foodRoutes = require("./routes/food.routes");

const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/",(req,res)=>{
    res.send("Hello world!")
})
app.use("/api/auth",authRoutes);
app.use("/api/food",foodRoutes);
app.use("/api/food-partner",foodRoutes);

module.exports =app;
