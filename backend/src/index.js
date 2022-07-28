import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const app = express()

mongoose.connect(
  `${process.env.START_MONGODB}${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}${process.env.END_MONGODB}`,
  {},
  () => {
    console.log("Connected to mongoose successfully")
  }
)

// Middlewares
app.use(express.json())
app.use(cors({ origin: "http://localhost:2000", credentials: true }))
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
)
app.use(cookieParser())
app.use(passport.initialize())
app.use(passport.session())

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.listen(4000, () => {
  console.log("Server Started")
})
