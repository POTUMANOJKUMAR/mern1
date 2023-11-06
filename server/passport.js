
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { Strategy as FacebookStrategy } from "passport-facebook";
import passport from "passport";

//google ids
const GOOGLE_CLIENT_ID =
  "411600451547-ovclclr2do3mdipo553d89f8a2g28vcp.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";
//facebook ids
const  FACEBOOK_APP_ID=875587410950063
const FACEBOOK_APP_SECRET="358fca83b0da6aac52a67039442684c1"
// apple ids


passport.use('google',
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET, 
      callbackURL: "http://localhost:8081/auth/google/callback",
    },

   
    function (request, accessToken, refreshToken, profile, done) { 
      return done(null, profile);
    }
  )
);

passport.use(new FacebookStrategy({
  clientID: FACEBOOK_APP_ID,
  clientSecret: FACEBOOK_APP_SECRET,
  callbackURL: "http://localhost:8081/auth/facebook/callback"

},
function(accessToken, refreshToken, profile, done) {

    return done(null, profile);
   

}
));
passport.serializeUser((user, done) => {
 
  done(null, user);
});

passport.deserializeUser((user, done) => {

 
    done(null, user);
 
});










