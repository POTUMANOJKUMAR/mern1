import database from "../database/db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer"
class Forget {
  async forget(req, res) {
    try {
      const email = req.body.email;
      console.log(email)
      const sql = `select * from manoj where email=?`;
      database.query(sql, email, (err, result) => {
        if (err) {
          console.log(err);
        }

        if (result.length > 0) {
          const token = jwt.sign({ id: result[0].id }, "123456", {
            expiresIn: "1d",
          });
          const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
              user:"potumanojkumar86@gmail.com",
              pass: "xupy jqyq phuv yxvz",
            },
          });
          const mailOptions = {
            from:"potumanojkumar86@gmail.com",
            to:  email,
            subject: "reset password",
            text: `http://localhost:5173/reset-password/${result[0].id}/${token}`,
          };

          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.error("Error sending email:", error);
            } else {
              res.json({Status:"Email sent successfully:"});
            }
          });
        }
        else{
          return res.json({Status:"email does not exist"})
        }
      });
    } catch (err) {
      console.log(err);
    }
  }
  async reset(req,res){
    const {id,token}=req.params;
    console.log(id,token)
    const {password}=req.body;
    console.log(password)
    jwt.verify(token,"123456",(err,decoded)=>{
      if(err){
        console.log(err)
      }
    
    bcrypt.hash(req.body.password.toString(),10,(err,hash)=>{
      if(err){
        console.log(err)
      }
     const sql= 'UPDATE manoj SET password = ? WHERE id = ?'
      database.query(sql,[hash,id],(err,result)=>{console.log(result)
        if(err){
          console.log(err)
        }
        return res.json({Status:`successfully`})
      })
    })

    })
    
  }
}
export default new Forget();
