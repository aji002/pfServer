require('dotenv').config() //configuring dotenv package to server for loading env variables to process.env
const express=require('express')//importing express
const cors=require('cors')
const router=require('./Routes/routes')
require('./Connect/dbConnect')
// const jwtmiddle=require('./Middlewares/jwtMiddleware')

const server=express() //creating as a server app

server.use(cors()) //cors() returns cors middleware and use configures it  //give all this in the same order
server.use(express.json()) //configuring json middleware to convert json data format to native
// server.use(jwtmiddle)
server.use(router)

server.use('/projectimg',express.static("./uploads"))

const PORT=3000||process.env.PORT // setting default port number and alternate port number from env

server.listen(PORT,()=>{  // for making server run and wait for requests
    console.log("Server Running at :",PORT);
    
})


// server.use("/demo",(req,res)=>{  // simple request handler example
//     res.send("Request Hit!!")
//     // res.end()
// })

// server.get('/demo/:uid',(req,res)=>{ // get request handler
//     console.log(req.params.uid);
//     res.send("Get request hit!!")
//     // res.end()
// })

// server.post('/postreq',(req,res)=>{
//     console.log(req.query);
//     console.log(req.body);  // adding data using query parameter
//     // res.send("POST request hit!!")
//     // res.end()
//     res.json({"msg":"ok"}).status(205)
// })

// server.put('/putreq',(req,res)=>{
//     res.send("PUT request hit!!")
// })

// server.delete('/deletereq',(req,res)=>{
//     res.send("Delete request hit!!")
// })