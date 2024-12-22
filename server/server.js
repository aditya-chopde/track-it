const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const { connectDB } = require("./connect")
const PORT = 8080;

app.use(cors())
app.use(bodyParser.json())

connectDB("mongodb+srv://adityachopde27:BeOYGmPNsvo8r7ku@cluster0.fg9bt.mongodb.net/track-it").then(()=>{
    console.log("Database Connected...")
})

// BeOYGmPNsvo8r7ku

app.get("/", async (req, res)=>{
    return res.json({message: "Hello TrackIt"})
})

app.listen(PORT, ()=>{
    console.log("Server Started at PORT: " + PORT);
})