const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModal = require('./modals/Users')


const app = express()
app.use(cors())
app.use(express.json())

try{
     mongoose.connect('mongodb+srv://test:test@cluster0.wceurnf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',{
        autoIndex: true
    })
    console.log('connecteed to mongodb')
}
catch(error){
    console.error(error)
}

app.get('/',(req,res) => {
    UserModal.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})
app.get('/getUser/:id',(req,res)=>{
    const id = req.params.id;
    UserModal.findById({_id:id})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})
app.put('/updateUser/:id',(req,res)=>{
    const id = req.params.id;
    UserModal.findByIdAndUpdate({_id:id},{
        name: req.body.name, 
        email: req.body.email, 
        age: req.body.age})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})
app.delete('/deleteUser/:id',(req,res)=>{
    const id = req.params.id;
    UserModal.findByIdAndDelete({_id: id})
    .then(r => res.json(r))
    .catch(err => err.json(err))
}
)
app.post("/createUser",(req,res)=> {
    UserModal.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3000,() => {
    console.log("server started")
})