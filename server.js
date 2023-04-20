const net = require('net')
const fs = require('fs/promises')

const server = net.createServer(c =>{
    console.log('client connected')

    c.on('end', ()=>{
        console.log('client disconnected')
    })
})


server.on('error', (error)=>{
    console.log(error)
    throw error
})

server.listen(4200, '::1', ()=>{
    console.log(`server is running on `, server.address())
})