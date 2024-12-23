const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const { connectDB } = require("./connect")
const PORT = process.env.PORT || 3000;
const user = require("./routes/user")
require("dotenv").config();

app.use(cors())
app.use(bodyParser.json())
app.use(express.urlencoded({extended: false}))

connectDB(process.env.MONGO_URI).then(()=>{
    console.log("Database Connected...")
})

// Routes 
app.use("/user", user);

app.get("/", async (req, res)=>{
    return res.json({message: "Hello TrackIt"})
})

app.listen(PORT, ()=>{
    console.log("Server Started at PORT: " + PORT);
})