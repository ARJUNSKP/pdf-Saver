const pdf =require('../model/pfdModel')


const pdfuploadApi=(req,res)=>{
    const pfdFileData=req.file.filename
    if(pfdFileData){
        const newPdf=pdf.create({pdfName:pfdFileData})
        if(newPdf){
            res.status(200).json("New Pdf Created")
        }else{
            res.status(400).json("Not Save Pdf")
        }
    }else{
        res.status(400).json("Pdf Not Present")
    }
}
const pdfFileGetAPi=async(req,res)=>{
    const pdfFiles=await pdf.find()
    if(pdfFiles.length>0){
        res.status(200).json(pdfFiles)
    }else{
        res.status(400).json('empty file')
    }
}



module.exports={pdfuploadApi,pdfFileGetAPi}