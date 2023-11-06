import express from "express";

const router = express.Router();
import passport from "passport";

import register from "../controller/register.js";
import verifyUser from "../authorization/auth.js";
import verify from "../controller/verifyuser.js";
// import cont from "../controller/gmail.js";
import Forget from "../controller/forget.js";
const CLIENT_URL = "http://localhost:5173/social";
const url="/"
router.post("/register", register.register);
router.post("/login", register.Login);

router.get("/", verifyUser, verify.verify);
router.get("/logout", verify.removetoken);
router.post("/forget",Forget.forget)
router.post("/reset-password/:id/:token",Forget.reset)
router.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect:CLIENT_URL,
    failureRedirect: "/",
  })
);
router.get("/success", (req, res) => {console.log(req.user)
  if (req.user) {
    res.status(200).json({
      success: true,
      message: "successfull",
      user: req.user,
      
     
    });
  }
});



router.get(
  "/facebook",
  passport.authenticate("facebook", {
    scope: ["user_friends", "manage_pages"],
  })
);

router.get(
  "/facebook/callback",
  passport.authenticate(
    "facebook",

    { failureRedirect: url }
  ),
  function (req, res) {
    res.redirect(url);
  }
);

export default router;
