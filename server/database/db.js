import mysql2 from "mysql2";
const database = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "register",
  });
  database.connect((err)=>{
    if(err)console.log(err)
    else{
console.log("database connected ")}
  })
  export default database