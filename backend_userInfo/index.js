const userInfo = require("./userInfo")
const mongoose = require("mongoose")
const express = require("express")
const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

const app = express()

app.use(cors(corsOptions));

app.post("/post1", async(req,resp)=>{
    for(i=0; i<=10;i++){
        let data = new userInfo({
        "role": "student",
        "name":`student${i}`,
        "userId": `kvs${i}`,
        "userName": `student${i}@yahoo.com`,
        "status": "Active"
        })
        let res = await data.save()
    }
    resp.send("done")
})

app.post("/post2", async(req,resp)=>{
    for(i=0; i<=1;i++){
        let data = new userInfo({
        "role": "teacher",
        "name":`Teacher${i}`,
        "userId": `Teacher_kvs${i}`,
        "userName": `Teacher${i}@yahoo.com`,
        "status": "Active"
        })
        let res = await data.save()
    }
    resp.send("done")
})

app.get("/:user", async (req,resp)=>{
    let data = await userInfo.find({role:"student",
                                    userId:req.params.user})
    // console.log(req.params)
    resp.send(data)
})

app.listen(8080)
