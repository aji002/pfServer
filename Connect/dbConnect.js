const mongoose=require('mongoose')

mongoose.connect(process.env.DBCONNECT).then((res)=>{
    console.log("Server connected with mongoDB-Atlas");
    
}).catch(err=>{
    console.log(err);
    
})