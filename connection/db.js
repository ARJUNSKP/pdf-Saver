const mongoose =require('mongoose')
mongoose.connect(process.env.BASE_URL,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log(`mongoose is connected`)
}).catch(()=>{
    console.log(`mongoose is not connected`)
})