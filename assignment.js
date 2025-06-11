const express =require("express")
const app = express()


function middleWare(req,res,next){

console.log("method is = " + req.method)
console.log("method is = " + req.url)
console.log(new Date())
next()

}


app.use(middleWare)

app.get('/sum',(req,res)=>{

    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json({

sum : a+b

    })

})

app.get('/sub',(req,res)=>{

    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json({

sum : a-b

    })

})


app.get('/mul',(req,res)=>{

    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json({

sum : a*b

    })

})






app.get('/divide',(req,res)=>{

    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json({

sum : a/b

    })

})


app.listen(3000)