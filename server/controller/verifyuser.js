
// app.get("/", verifyUser, (req, res) => {
//     return res.json({ Statas: "success", name: req.name });
//   });
import cookieParser from "cookie-parser";

class verify{
    async verify(req,res){
        try{

            return res.json({ Statas: "success", name: req.name });


        }catch(err){
            console.log(err)
        }
    }
     async removetoken(req,res){
        try{
            res.clearCookie("token");
            return res.json({ Statas: "success" });
        }
     catch(err){
            console.log(err)
        }
}}
export default new verify