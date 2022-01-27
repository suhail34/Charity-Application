const express = require('express');
const app = express();

app.get('/',(req,res)=>{
  res.send("hello")
})

app.get('/login',(req,res)=>{
  res.send("Login page")
})

app.get('/register', (req,res)=>{
  res.send("Registration Page")
})

app.listen(3000,()=>{
  console.log(`listening at port https://Charity-Application.blockchainweb.repl.co`);
})

