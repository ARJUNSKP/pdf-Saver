const mongoose =require('mongoose')

const pdfSchema=mongoose.Schema({
    pdfName:{
        type:String,
        required:true
    }
})
const pdfs=mongoose.model('pfds',pdfSchema)

module.exports=pdfs