import express from "express";
import session from "cookie-session";
import cors from "cors";

import "../server/passport.js"
import cookieParser from "cookie-parser";

import passport from "passport"
import router from "./routes/router.js";
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [`http://localhost:5173`],
    methods: [`POST`, `GET`],
    credentials: true,
  })
);

app.use(
  session({
    secret: '123456',
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);


app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use("/auth", router);

app.listen(8081, () => {
  console.log("Running")
});
