const multer =require('multer')

const storage=multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'./pdf-files')
    },
    filename:(req,file,callback)=>{
        callback(null,`pdf-${Date.now()}-${file.originalname}`)
    }
})
const fileFilter=(req,file,callback)=>{
    if(file.mimetype=='application/pdf'){
        callback(null,true)
    }else{
        callback(null,false)
        return callback(new Error ('only excepting pdf file'))
    }
}

const pdfUpload=multer({storage,fileFilter})

module.exports=pdfUpload