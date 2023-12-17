const express =require('express')
const pfdLogic=require('../controler/pdf')
const pdfUpload =require('../Middleware/pdfMiddleware')

const route=new express.Router()

route.post('/express/pfd-file/store',pdfUpload.single('file-upload'),pfdLogic.pdfuploadApi)
route.get('/express/file',pfdLogic.pdfFileGetAPi)

module.exports=route