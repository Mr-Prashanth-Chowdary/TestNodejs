const express = require('express')
const app = express()

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("hello is home route");
})
app.get('/login',(req,res)=>{
    res.send("this is login route");
})
app.listen(3000,()=>{
    console.log('the server is running on 5000');
})