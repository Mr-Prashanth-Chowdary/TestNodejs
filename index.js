const express = require('express')
const app = express()

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("hello there server is running");
})

app.listen(3000,()=>{
    console.log('the server is running on 5000');
})