require("dotenv").config()
const server=require("./server")

server.listen((port = process.envPORT || 4000), () => {
    console.log(`\n ***Listening on port ${port}***\n`)
})
