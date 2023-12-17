const express =require('express')
require('dotenv').config()
require('./connection/db')
const server=express()
const router =require('./router/route')
const cors=require('cors')
server.use(cors())
server.use(express.json())
server.use(router)
server.use('/pdfFile',express.static('./pdf-files'))
const port=4000 || process.env.port
server.listen(port,()=>{
    console.log(`server is running ${port} in this port`)
})