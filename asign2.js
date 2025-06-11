function loginUser(username,password){

return new Promise ((resolve,reject)=>{

    console.log("logging in ...........")

    setTimeout(()=>{

        if(username==="Admin" && password=="12345"){

            resolve({id:1,name:"Admin"})

        }

        else{

            reject("Fake users")
        }
    },1000)

})

}
loginUser().then((message)=>{

    console.log(message)
})
