const express = require('express')
const app = express();
const cors = require('cors')

app.use(express.static('public'))
app.use(cors())

app.get('/account/create/:name/:email/:password', (req, res)=> {
    res.send({
        name: req.params.name,
        email: req.params.email,
        password: req.params.password
    })
})

app.get('/account/login/:email/:password', (req,res)=>{
    res.send({
        email: req.params.email,
        password: req.params.password
    })
})

app.get('/account/deposit/:email/:deposit', (req,res)=>{
    res.send({
        email: req.params.email,
        deposit: req.params.deposit
    })
})
app.get('/account/withdraw/:email/:withdraw', (req,res)=>{
    res.send({
        email: req.params.email,
        withdraw: req.params.withdraw
    })
})

app.get('/account/balance/:email/:balance', (req,res)=>{
    res.send({
        email: req.params.email,
        balance: req.params.balance
    })
})
app.get('/account/all', (req,res)=> {
    res.send({
        name: "Eric",
        email: "eric@mit.edu",
        password: 'secret123'
    })
})

app.listen(3000, (req, res)=> {
    console.log('Running on port 3000!')
})