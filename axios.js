// async function getRequest(){
//     console.log("before sending data")
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
//      const data = await response.json()
//      console.log(data)
//      console.log("After sending data")
//      document.getElementById("post").innerHTML=data.body
// }
// getRequest()

const { default: axios } = require("axios")


async function getRequest(){

    const response  = await  axios.get ("https://jsonplaceholder.typicode.com/posts/1")
     document.getElementById("post").innerHTML = data.title
}

getRequest()