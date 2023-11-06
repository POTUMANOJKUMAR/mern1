import jwt from "jsonwebtoken";


const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
  
    if (!token) {
      return res.status(403).json({ message: "Token not found" });
    }
  
    jwt.verify(token, "123456", (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: "Failed to authenticate token" });
      }
      req.name = decoded.name;
  
      next();
    });
  };
  export default verifyUser
