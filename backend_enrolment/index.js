// require("./enrolment")
const mongoose = require("mongoose")
const enrolment = require("./enrolment")
const userInfo = require("/Users/pankaj.kumar/My_folder/onboarding_project/backend_userInfo/userInfo.js")
const cors = require('cors');
const express = require("express")
const app = express()

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));

// app.use(express.json())




app.post("/post1", async (req,resp)=>{

    for(i=0;i<5;i++){

        var res = new enrolment({
            "classId": "V2RU22BV",
            "username":`student${i}@yahoo.com`,
            "role": "student"
        })
        let data = await res.save()
        console.log(data)
    }
    resp.send(true)

})

app.get("/:classId", async (req,resp)=>{
    let data = await enrolment.find({"classId":req.params.classId,
                                        })
    // resp.send(req.params)
    console.log(data)
    resp.send(data)
})

app.get("/", async (req, resp)=>{
    let data = await enrolment.find({"role":"student",
                                        "classId":"V2RU22BV"})
    resp.send(data)
                                        
})

// app.get("/user", async(req,resp)=>{
//     let data = await userInfo.find()
//     resp.send(data)
// })

app.post("/post2", async (req,resp)=>{

    for(i=5;i<11;i++){

        var res = new enrolment({
            "classId": "V2RU3MTB",
            "username":`student${i}@yahoo.com`,
            "role": "student"
        })
        let data = await res.save()
        console.log(data)
    }
    resp.send(true)

})

app.listen(8000,
    ()=>{
        console.log(`server start at 8000`)
    })