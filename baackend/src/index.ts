import express = require("express");

const pgClient= new Client({
  connectionString:'postgresql://neondb_owner:npg_gFOCcID2uY8e@ep-twilight-cloud-adk7gb80-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'})

const app = express();
app.use(express.json());// for request body parsing

app.post("/", async(req,res)=>{
  const username = req.body.username;
  const email= req.body.email;
  const password = req.body.password;
  try{
    //sql query 
    const insertquery = `INSERT INTO users (email,password) VALUES ('${email}','${password}','${username}')`;
    const response = await pgClient.query(insertquery,[email,password]);
  }catch(err){
    console.error(err);
  }
})

const port = 3000;

app.listen(port,()=>{
  console.log(`server is running at http://localhost:${port}`);
})

