const express = require("express")
const app = express()




function oldEnoughMilldleWare(req,res,next){ //next should be defined

    const age = Number(req.query.age)
    // console.log("Raw query.age:", req.query.age);
    // console.log("Converted to number:", age);


if(age>=14){
   
    console.log("age is valid")
    next()                  //next is middleware
}
else{

    console.log("age is not valid")

res.status(403).json({

    msg : "you cannot share ride with other children"
})
}


//app.use(oldEnoughMilldleWare)  define middleware in aggregate

}

app.get('/ride1',oldEnoughMilldleWare,function(req,res){

   
      
        res.json({
    
            msg:"you have ridden first ride "
    
        })



    }

    
)



app.get('/ride2',oldEnoughMilldleWare,function(req,res){



        res.json({
    
            msg:"you have ridden second ride ",
    
        })



    }

   
)

app.listen((3002),()=>{

    console.log("working in 3002 port")
})