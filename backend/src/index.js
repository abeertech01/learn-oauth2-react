import express from "express"
import mongoose from "mongoose"

const app = express()

mongoose.connect(
  "mongodb+srv://memories123:memories123@cluster0.6xni6.mongodb.net/oauth2?retryWrites=true&w=majority",
  {},
  () => {
    console.log("Connected to mongoose successfully")
  }
)

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.listen(4000, () => {
  console.log("Server Started")
})
