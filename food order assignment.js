
import chalk from "chalk"


//Searching Man
         
function searchingDeliveryMan(){

    return new Promise((resolve)=>{
     
        
        console.log(chalk.red.bold("herooo searching........🔍"))

       setTimeout(()=>{

    resolve(chalk.greenBright.bold("heroo found😊"))
    

       },1000)
    })
}
searchingDeliveryMan().then((message)=>{

    console.log(message)
})


          //orderprep


function beingPrep(){


    return new Promise((resolve)=>{

        // console.log("Your order has been placed...yoohoooo")

        setTimeout(()=>{

            resolve(chalk.blueBright.bold("Your order has been placed...yoohoooo"))
        },4000)

    })

}
beingPrep().then((message1)=>{

    console.log(message1)
})


      

                   // cooking food

function  cooking(){

    return new Promise((resolve)=>{

        // console.log("restraunt is preparing your food")
        setTimeout(()=>{
            resolve(chalk.yellowBright.bold(" restraunt is preparing your food ..........might takes half an hour sir/mam please wait haiii👌"))
        },10000)
    })

}

cooking().then((message3)=>{

    console.log(message3)
})



function onTheWay(){

return new Promise((resolve)=>{

    resolve(chalk.bgBlue.bold("herooo is on the wayyyyy"))

},15000)


}

onTheWay().then((message)=>{

   console.log(message)

})












function deliveryDone(){

    return new Promise((resolve)=>{

        // console.log("i am waiting you to receive your order")
        setTimeout(()=>{

      resolve(chalk.bgRed.bold("Where thee hell are you mf...10 min passed"))

        },20000)
    })
}
deliveryDone().then((message4)=>{

    console.log(message4)
})







