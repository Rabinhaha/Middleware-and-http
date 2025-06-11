

const express = require("express")
const app = express()


const user = [{

    name : "rabin",
    kidneys : [{

        healthy: false 

    }]
}]


app.get('/',function(req,res){

    const rabinKidneys = user[0].kidneys
    const numOfKidneys = rabinKidneys.length
   
    let numOfHealthyKidneys = 0

    for(let i=0;i<rabinKidneys;i++){

        if(rabinKidneys[i].numOfUnHealthyKidneyshealthy){

         numOfHealthyKidneys = numOfHealthyKidneys + 1
         
        }


        
        
    }
    
    const numOfunHealthyKidneys = numOfKidneys - numOfHealthyKidneys
    res.json({

    rabinKidneys,
    numOfKidneys,
    numOfHealthyKidneys,
    numOfunHealthyKidneys


    })



})
app.post('/',function(req,res){


const ishealthy = req.query.ishealthy
user[0].kidneys.push({

    healthy : ishealthy
})

res.json({
   
})

})


app.put('/',function(req,res){

    for(let i=0;i<user[0].length;i++){

        user[0].kidneys[i].healthy =true
    }
    res.json({})


})


app.delete('/',function(req,res){

const newKidneys = []
for (let i=0; i<=user[0].kidneys.length;i++){

    if(user[0].kidneys[i].healthy){

        newKidneys.push({

            healthy:true
            
        })
        
    }
}

         user[0].kidneys=newKidneys
         res.json({})
})

app.listen(3001)