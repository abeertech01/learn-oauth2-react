import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"
import session from "express-session"
import passport from "passport"
import { Strategy as GoogleStrategy } from "passport-google-oauth20"

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
app.use(passport.initialize())
app.use(passport.session())

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "776866148143-od6vtln8q20k3gqhboevshjlsubfcurb.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      // Called Successful Authentication!
      // Insert into Database
      console.log(profile)
      cb(null, profile)
    }
  )
)

app.get("/auth/google", passport.authenticate("google", { scope: ["profile"] }))

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/")
  }
)

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.listen(4000, () => {
  console.log("Server Started")
})
