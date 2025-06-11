
const fs = require("fs")
fs.readFile("a.txt","utf-8",function(err,data){


})

const express = require("express")

const app = express()

app.get('/',function (req,res){

         res.json({
        name:"rabin"

         })

                                    // "/" ROUTE HANDLER
                                                              //RES SEND PLAIN DATA
})                                                            

app.post('/',function (req,res){

    res.send('<b>hello from post</b>')

})

app.get('/asd',function (req,res){

    res.send('hello from asd')

})

app.listen(3003)