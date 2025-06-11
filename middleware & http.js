const express = require("express")
const app = express()

let requestCount = 0

// Middleware to count requests
function requestIncreaser(req, res, next) {
  requestCount = requestCount + 1
  console.log("Total number of requests: " + requestCount)
  next()
}

// Handler for /sum
function sumHandler(req, res) {
  const a = parseInt(req.query.a)
  const b = parseInt(req.query.b)

  res.json({
    sum: a + b
  })
}

// Route
app.get("/sum", requestIncreaser, sumHandler)

app.listen(3001, () => {
  console.log("Server is running on port 3003")
})
