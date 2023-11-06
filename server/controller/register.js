import database from "../database/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
class register {
  async register(req, res) {
    try {
      console.log(req.body.name,req.body.email,req.body.password)
      const sql1 = `select * from manoj where email=?`;
      database.query(sql1, [req.body.email], (err, result) => {
        if (err) console.log(err);
        if (result.length>0) {
         
          return res.json({ Status: "Email is already existed plz login" });
        }
        else{
          bcrypt.hash(req.body.password, 10, (err, hash) => {
            if (err) console.log(err);
            if (hash) {
              const values = [req.body.name, req.body.email, hash];
              const sql = `insert into manoj(name,email,password) values(?)`;
              database.query(sql, [values], (err, result) => {
                if (err) console.log(err);
                if (result) {
                  return res.json({ Status: "success" });
                }
              });
            }
          });
        }
      });
     
    } catch (err) {
      console.log(err);
      // return res.Status(500).json({massage:"server error"})
    }
  }

  async Login(req, res) {
    try {
      const sql = "select * from manoj where email=?";

      database.query(sql, [req.body.email], (err, result) => {console.log(result)
     
        if (err) {
          return res.json({ Error: "Login error" });
        }

        if (result.length > 0) {
          bcrypt.compare(req.body.password.toString(), result[0].password,(err, isMatch) => {
             
      if (err) {
                return res.json({ Error: "Password compare error" });
              }

              if (isMatch) {
                const token = jwt.sign({ name: result[0].name }, "123456", {
                  expiresIn: "1d",
                });
                res.cookie("token", token);
                res.json({ Status: "success", name: result[0].name });
              } 
              else {
                return res.json({Status : "Password not matched" });
              }
            }
          );
        } 
        else {
          return res.json({ Status: "Email does not exist" });
        }
      });
    } catch (err) {
      console.log(err);
    }
  }
}

export default new register();

