const express = require("express")
const app = express()

let requestCounter = 0

function requestCounterMiddleware(req,res,next){

requestCounter = requestCounter + 1
req.name = "rabinbasnet"
console.log("the total requestcounter is = " +requestCounter)
next()

}

function sumHandler(req,res){

const a = parseInt(req.query.a)
const b = parseInt(req.query.b)
console.log(req.name)
res.json({

    sum : a+b
})


}


function mulHandler(req,res){

const a = parseInt(req.query.a)
const b = parseInt(req.query.b)
res.json({

    mul : a*b
})


}
app.use(requestCounter)
app.get("/sum",sumHandler)
app.get("/mul",mulHandler)
app.get("/admin",function(req,res){

    res.json({

        message : "total num of request is " + requestCounter
    })
})

app.listen(3001)