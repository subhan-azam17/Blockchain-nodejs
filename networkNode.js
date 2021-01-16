const Blockchain = require('./pro')
const express = require('express')
const bodyparser = require('body-parser')


const post = process.argv[2]

var chain = new Blockchain()

var app = express()
app.use(bodyparser.json())

app.get('/blockchain',(req,res)=>{
    res.send(chain)

})
app.post('/transections',(req,res)=>{
    var tx = chain.createNewTx(req.body.amount,req.body.sender,req.body.receiver)
    res.json({"success":true,"Massage":"new transection created","data":tx})
})

app.get('/blockmining',(req,res)=>{
    var me = chain.createNewBlock()
    res.send(me)
})
app.listen(post,()=>{
    console.log("Listening on port",{post})

})